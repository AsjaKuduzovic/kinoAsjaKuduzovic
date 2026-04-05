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
        for (let sjediste of projekcija.sjedista) {
            if (!dozvoljeniStatusi.includes(sjediste.status)) {
                return false;
            }
        }
    }

    return true;
}

function prikaziSalu(podaci) {
    const salaDiv = document.getElementById("sala");

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
        <div class="film-info">
            <h1 class="film-naziv">${projekcija.film}</h1>
            <p class="film-detalji">
                <span>Vrijeme projekcije: <strong>${projekcija.vrijeme}h</strong></span>
                <span>Broj sale: <strong>${trenutnaProjekcija + 1}</strong></span>
            </p>
        </div>

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
            const sjediste = projekcija.sjedista.find(s => s.red === red && s.broj === i);

            const seatDiv = document.createElement("div");
            seatDiv.className = "seat";

            if (sjediste) {
                seatDiv.classList.add(sjediste.status);
                seatDiv.title = `${red}${i} - ${sjediste.status}`;

                seatDiv.addEventListener("click", function () {
                    if (sjediste.status === "slobodno") {
                        sjediste.status = "rezervisano";
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
    spacer.className = "col-label-spacer";
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
            <img src="https://via.placeholder.com/200x280?text=Film" alt="Poster filma">
            <div class="film-poster-info">
                <p class="poster-title">${projekcija.film}</p>
                <p class="poster-duration">${projekcija.vrijeme}</p>
                <p class="poster-genre">PROJEKCIJA</p>
            </div>
        </div>
    `;

    layout.appendChild(left);
    layout.appendChild(right);

    salaDiv.appendChild(layout);
}