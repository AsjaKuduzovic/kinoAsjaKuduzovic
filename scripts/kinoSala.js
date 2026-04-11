let trenutnaProjekcija = 0;

function generisiSjedista(lista) {
    return lista.map(item => {
        return {
            red: item[0],
            broj: item[1],
            status: item[2]
        };
    });
}

function validirajPodatke(podaci) {
    if (!podaci.projekcije || podaci.projekcije.length === 0) {
        return false;
    }

    const dozvoljeniStatusi = ["slobodno", "zauzeto", "rezervisano"];

    for (let projekcija of podaci.projekcije) {
        if (!projekcija.sjedista || projekcija.sjedista.length === 0) {
            return false;
        }

        for (let sjediste of projekcija.sjedista) {
            if (!dozvoljeniStatusi.includes(sjediste.status)) {
                return false;
            }
        }
    }

    return true;
}

function ucitajRezervacije(podaci) {
    const sacuvano = localStorage.getItem("kinoRezervacije");
    if (!sacuvano) return;

    const rezervacije = JSON.parse(sacuvano);

    rezervacije.forEach(r => {
        const projekcija = podaci.projekcije[r.projekcijaIndex];
        if (!projekcija) return;
        const sjediste = projekcija.sjedista.find(
            s => s.red === r.red && s.broj === r.broj
        );
        if (sjediste && sjediste.status === "slobodno") {
            sjediste.status = "rezervisano";
        }
    });
}

function sacuvajRezervaciju(projekcijaIndex, red, broj) {
    const sacuvano = localStorage.getItem("kinoRezervacije");
    const rezervacije = sacuvano ? JSON.parse(sacuvano) : [];

    const vecPostoji = rezervacije.some(
        r => r.projekcijaIndex === projekcijaIndex && r.red === red && r.broj === broj
    );

    if (!vecPostoji) {
        rezervacije.push({ projekcijaIndex, red, broj });
        localStorage.setItem("kinoRezervacije", JSON.stringify(rezervacije));
    }
}

function prikaziSalu(podaci) {
    const salaDiv = document.getElementById("sala");

    if (!salaDiv) return;

    if (!validirajPodatke(podaci)) {
        salaDiv.innerHTML = "<h2>Podaci nisu validni!</h2>";
        return;
    }

    const projekcija = podaci.projekcije[trenutnaProjekcija];
    salaDiv.innerHTML = "";

    const layout = document.createElement("div");
    layout.className = "sala-layout";

    const left = document.createElement("div");
    left.className = "sala-left";

    const right = document.createElement("div");
    right.className = "sala-right";

    left.innerHTML = `
    <div class="platno-wrapper">
        <div class="platno">PLATNO</div>
    </div>
`;

    const salaWrapper = document.createElement("div");
    salaWrapper.className = "sala-wrapper";

    const salaGrid = document.createElement("div");
    salaGrid.className = "sala-grid";

    const redovi = [...new Set(projekcija.sjedista.map(s => s.red))];
    const maxBroj = Math.max(...projekcija.sjedista.map(s => s.broj));

    redovi.forEach(red => {
        const label = document.createElement("div");
        label.className = "row-label";
        label.textContent = red;
        salaGrid.appendChild(label);

        for (let i = 1; i <= maxBroj; i++) {
            const sjediste = projekcija.sjedista.find(
                s => s.red === red && s.broj === i
            );

            const seatDiv = document.createElement("div");
            seatDiv.className = "seat";

            if (sjediste) {
                seatDiv.classList.add(sjediste.status);
                seatDiv.title = `${red}${i} - ${sjediste.status}`;

                seatDiv.addEventListener("click", function () {
                    if (sjediste.status === "slobodno") {
                        sjediste.status = "rezervisano";
                        sacuvajRezervaciju(trenutnaProjekcija, red, i);
                        prikaziSalu(podaci);
                    }
                });
            }

            salaGrid.appendChild(seatDiv);
        }
    });

    salaWrapper.appendChild(salaGrid);

    const colNumbers = document.createElement("div");
    colNumbers.className = "col-numbers";

    const spacer = document.createElement("span");
    spacer.textContent = "";
    colNumbers.appendChild(spacer);

    for (let i = 1; i <= maxBroj; i++) {
        const broj = document.createElement("span");
        broj.textContent = i;
        colNumbers.appendChild(broj);
    }

    salaWrapper.appendChild(colNumbers);

    const legenda = document.createElement("div");
    legenda.className = "legenda";
    legenda.innerHTML = `
        <span class="legenda-item"><span class="legenda-box slobodno-box"></span> Slobodno</span>
        <span class="legenda-item"><span class="legenda-box zauzeto-box"></span> Zauzeto</span>
        <span class="legenda-item"><span class="legenda-box rezervisano-box"></span> Rezervisano</span>
    `;

    const navigacija = document.createElement("div");
    navigacija.style.textAlign = "center";
    navigacija.style.marginTop = "20px";

    const btnPrethodna = document.createElement("button");
    btnPrethodna.textContent = "Prethodna projekcija";
    btnPrethodna.style.marginRight = "10px";

    btnPrethodna.addEventListener("click", function () {
        if (trenutnaProjekcija > 0) {
            trenutnaProjekcija--;
            prikaziSalu(podaci);
        }
    });

    const btnSljedeca = document.createElement("button");
    btnSljedeca.textContent = "Sljedeća projekcija";

    btnSljedeca.addEventListener("click", function () {
        if (trenutnaProjekcija < podaci.projekcije.length - 1) {
            trenutnaProjekcija++;
            prikaziSalu(podaci);
        }
    });

    navigacija.appendChild(btnPrethodna);
    navigacija.appendChild(btnSljedeca);

    left.appendChild(salaWrapper);
    left.appendChild(legenda);
    left.appendChild(navigacija);

    right.innerHTML = `
    <div class="film-poster-card">
        <img src="${projekcija.poster}" alt="${projekcija.film}">
        <div class="film-poster-info">
            <p class="poster-title">${projekcija.film}</p>
            <div class="poster-meta-box">Vrijeme projekcije: ${projekcija.vrijeme}</div>
            <div class="poster-meta-box">Broj sale: ${projekcija.sala}</div>
        </div>
    </div>
`;

    layout.appendChild(left);
    layout.appendChild(right);

    salaDiv.appendChild(layout);
}