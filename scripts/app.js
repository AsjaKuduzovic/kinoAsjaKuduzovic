const podaci = {
    projekcije: [
        {
            film: "F1: The Movie",
            vrijeme: "20:00",
            sala: 1,
            poster: "https://m.media-amazon.com/images/M/MV5BNGI0MDI4NjEtOWU3ZS00ODQyLWFhYTgtNGYxM2ZkM2Q2YjE3XkEyXkFqcGc@._V1_.jpg",
            sjedista: generisiSjedista([
                ["A", 1, "zauzeto"], ["A", 2, "slobodno"], ["A", 3, "slobodno"], ["A", 4, "zauzeto"], ["A", 5, "slobodno"],
                ["A", 6, "slobodno"], ["A", 7, "zauzeto"], ["A", 8, "slobodno"], ["A", 9, "rezervisano"], ["A", 10, "slobodno"],

                ["B", 1, "slobodno"], ["B", 2, "slobodno"], ["B", 3, "zauzeto"], ["B", 4, "zauzeto"], ["B", 5, "slobodno"],
                ["B", 6, "rezervisano"], ["B", 7, "slobodno"], ["B", 8, "zauzeto"], ["B", 9, "slobodno"], ["B", 10, "slobodno"],

                ["C", 1, "zauzeto"], ["C", 2, "zauzeto"], ["C", 3, "slobodno"], ["C", 4, "slobodno"], ["C", 5, "zauzeto"],
                ["C", 6, "slobodno"], ["C", 7, "slobodno"], ["C", 8, "slobodno"], ["C", 9, "rezervisano"], ["C", 10, "slobodno"],

                ["D", 1, "slobodno"], ["D", 2, "rezervisano"], ["D", 3, "slobodno"], ["D", 4, "zauzeto"], ["D", 5, "zauzeto"],
                ["D", 6, "slobodno"], ["D", 7, "slobodno"], ["D", 8, "zauzeto"], ["D", 9, "slobodno"], ["D", 10, "slobodno"],

                ["E", 1, "slobodno"], ["E", 2, "slobodno"], ["E", 3, "zauzeto"], ["E", 4, "slobodno"], ["E", 5, "slobodno"],
                ["E", 6, "zauzeto"], ["E", 7, "rezervisano"], ["E", 8, "slobodno"], ["E", 9, "slobodno"], ["E", 10, "zauzeto"],

                ["F", 1, "zauzeto"], ["F", 2, "slobodno"], ["F", 3, "slobodno"], ["F", 4, "slobodno"], ["F", 5, "rezervisano"],
                ["F", 6, "slobodno"], ["F", 7, "zauzeto"], ["F", 8, "slobodno"], ["F", 9, "slobodno"], ["F", 10, "slobodno"],

                ["G", 1, "slobodno"], ["G", 2, "zauzeto"], ["G", 3, "slobodno"], ["G", 4, "slobodno"], ["G", 5, "slobodno"],
                ["G", 6, "rezervisano"], ["G", 7, "slobodno"], ["G", 8, "slobodno"], ["G", 9, "zauzeto"], ["G", 10, "slobodno"],

                ["H", 1, "slobodno"], ["H", 2, "slobodno"], ["H", 3, "slobodno"], ["H", 4, "zauzeto"], ["H", 5, "slobodno"],
                ["H", 6, "slobodno"], ["H", 7, "slobodno"], ["H", 8, "rezervisano"], ["H", 9, "slobodno"], ["H", 10, "zauzeto"]
            ])
        },
        {
            film: "Iron Man 3",
            vrijeme: "18:00",
            sala: 2,
            poster: "https://m.media-amazon.com/images/M/MV5BMjIzMzAzMjQyM15BMl5BanBnXkFtZTcwNzM2NjcyOQ@@._V1_FMjpg_UX1000_.jpg",
            sjedista: generisiSjedista([
                ["A", 1, "slobodno"], ["A", 2, "slobodno"], ["A", 3, "zauzeto"], ["A", 4, "slobodno"], ["A", 5, "rezervisano"],
                ["A", 6, "slobodno"], ["A", 7, "zauzeto"], ["A", 8, "slobodno"], ["A", 9, "slobodno"], ["A", 10, "zauzeto"],

                ["B", 1, "slobodno"], ["B", 2, "zauzeto"], ["B", 3, "slobodno"], ["B", 4, "slobodno"], ["B", 5, "zauzeto"],
                ["B", 6, "rezervisano"], ["B", 7, "slobodno"], ["B", 8, "slobodno"], ["B", 9, "zauzeto"], ["B", 10, "slobodno"],

                ["C", 1, "rezervisano"], ["C", 2, "slobodno"], ["C", 3, "zauzeto"], ["C", 4, "slobodno"], ["C", 5, "slobodno"],
                ["C", 6, "zauzeto"], ["C", 7, "slobodno"], ["C", 8, "rezervisano"], ["C", 9, "slobodno"], ["C", 10, "slobodno"],

                ["D", 1, "slobodno"], ["D", 2, "slobodno"], ["D", 3, "zauzeto"], ["D", 4, "rezervisano"], ["D", 5, "slobodno"],
                ["D", 6, "slobodno"], ["D", 7, "zauzeto"], ["D", 8, "slobodno"], ["D", 9, "slobodno"], ["D", 10, "zauzeto"],

                ["E", 1, "zauzeto"], ["E", 2, "slobodno"], ["E", 3, "slobodno"], ["E", 4, "slobodno"], ["E", 5, "rezervisano"],
                ["E", 6, "slobodno"], ["E", 7, "zauzeto"], ["E", 8, "slobodno"], ["E", 9, "slobodno"], ["E", 10, "slobodno"],

                ["F", 1, "slobodno"], ["F", 2, "rezervisano"], ["F", 3, "slobodno"], ["F", 4, "zauzeto"], ["F", 5, "slobodno"],
                ["F", 6, "slobodno"], ["F", 7, "slobodno"], ["F", 8, "zauzeto"], ["F", 9, "slobodno"], ["F", 10, "rezervisano"],

                ["G", 1, "slobodno"], ["G", 2, "slobodno"], ["G", 3, "zauzeto"], ["G", 4, "slobodno"], ["G", 5, "slobodno"],
                ["G", 6, "zauzeto"], ["G", 7, "rezervisano"], ["G", 8, "slobodno"], ["G", 9, "slobodno"], ["G", 10, "zauzeto"],

                ["H", 1, "rezervisano"], ["H", 2, "slobodno"], ["H", 3, "slobodno"], ["H", 4, "zauzeto"], ["H", 5, "slobodno"],
                ["H", 6, "slobodno"], ["H", 7, "zauzeto"], ["H", 8, "slobodno"], ["H", 9, "slobodno"], ["H", 10, "slobodno"]
            ])
        },
        {
            film: "Scarface",
            vrijeme: "21:30",
            sala: 3,
            poster: "https://upload.wikimedia.org/wikipedia/en/7/71/Scarface_-_1983_film.jpg",
            sjedista: generisiSjedista([
                ["A", 1, "zauzeto"], ["A", 2, "zauzeto"], ["A", 3, "slobodno"], ["A", 4, "slobodno"], ["A", 5, "slobodno"],
                ["A", 6, "rezervisano"], ["A", 7, "slobodno"], ["A", 8, "zauzeto"], ["A", 9, "slobodno"], ["A", 10, "slobodno"],

                ["B", 1, "slobodno"], ["B", 2, "rezervisano"], ["B", 3, "slobodno"], ["B", 4, "zauzeto"], ["B", 5, "slobodno"],
                ["B", 6, "slobodno"], ["B", 7, "zauzeto"], ["B", 8, "slobodno"], ["B", 9, "slobodno"], ["B", 10, "rezervisano"],

                ["C", 1, "slobodno"], ["C", 2, "slobodno"], ["C", 3, "slobodno"], ["C", 4, "zauzeto"], ["C", 5, "rezervisano"],
                ["C", 6, "slobodno"], ["C", 7, "zauzeto"], ["C", 8, "slobodno"], ["C", 9, "slobodno"], ["C", 10, "slobodno"],

                ["D", 1, "zauzeto"], ["D", 2, "slobodno"], ["D", 3, "rezervisano"], ["D", 4, "slobodno"], ["D", 5, "slobodno"],
                ["D", 6, "zauzeto"], ["D", 7, "slobodno"], ["D", 8, "slobodno"], ["D", 9, "rezervisano"], ["D", 10, "slobodno"],

                ["E", 1, "slobodno"], ["E", 2, "zauzeto"], ["E", 3, "slobodno"], ["E", 4, "slobodno"], ["E", 5, "rezervisano"],
                ["E", 6, "slobodno"], ["E", 7, "zauzeto"], ["E", 8, "slobodno"], ["E", 9, "slobodno"], ["E", 10, "zauzeto"],

                ["F", 1, "slobodno"], ["F", 2, "slobodno"], ["F", 3, "zauzeto"], ["F", 4, "rezervisano"], ["F", 5, "slobodno"],
                ["F", 6, "slobodno"], ["F", 7, "slobodno"], ["F", 8, "zauzeto"], ["F", 9, "slobodno"], ["F", 10, "slobodno"],

                ["G", 1, "rezervisano"], ["G", 2, "slobodno"], ["G", 3, "slobodno"], ["G", 4, "zauzeto"], ["G", 5, "slobodno"],
                ["G", 6, "slobodno"], ["G", 7, "zauzeto"], ["G", 8, "slobodno"], ["G", 9, "slobodno"], ["G", 10, "rezervisano"],

                ["H", 1, "slobodno"], ["H", 2, "zauzeto"], ["H", 3, "slobodno"], ["H", 4, "slobodno"], ["H", 5, "slobodno"],
                ["H", 6, "rezervisano"], ["H", 7, "slobodno"], ["H", 8, "zauzeto"], ["H", 9, "slobodno"], ["H", 10, "slobodno"]
            ])
        },
        {
            film: "Red",
            vrijeme: "17:15",
            sala: 4,
            poster: "https://m.media-amazon.com/images/M/MV5BMzg2Mjg1OTk0NF5BMl5BanBnXkFtZTcwMjQ4MTA3Mw@@._V1_.jpg",
            sjedista: generisiSjedista([
                ["A", 1, "slobodno"], ["A", 2, "zauzeto"], ["A", 3, "slobodno"], ["A", 4, "rezervisano"], ["A", 5, "slobodno"],
                ["A", 6, "slobodno"], ["A", 7, "zauzeto"], ["A", 8, "slobodno"], ["A", 9, "slobodno"], ["A", 10, "rezervisano"],

                ["B", 1, "slobodno"], ["B", 2, "slobodno"], ["B", 3, "zauzeto"], ["B", 4, "slobodno"], ["B", 5, "slobodno"],
                ["B", 6, "rezervisano"], ["B", 7, "slobodno"], ["B", 8, "zauzeto"], ["B", 9, "slobodno"], ["B", 10, "slobodno"],

                ["C", 1, "rezervisano"], ["C", 2, "slobodno"], ["C", 3, "slobodno"], ["C", 4, "zauzeto"], ["C", 5, "slobodno"],
                ["C", 6, "slobodno"], ["C", 7, "zauzeto"], ["C", 8, "slobodno"], ["C", 9, "rezervisano"], ["C", 10, "slobodno"],

                ["D", 1, "slobodno"], ["D", 2, "zauzeto"], ["D", 3, "slobodno"], ["D", 4, "slobodno"], ["D", 5, "rezervisano"],
                ["D", 6, "slobodno"], ["D", 7, "zauzeto"], ["D", 8, "slobodno"], ["D", 9, "slobodno"], ["D", 10, "zauzeto"],

                ["E", 1, "zauzeto"], ["E", 2, "slobodno"], ["E", 3, "rezervisano"], ["E", 4, "slobodno"], ["E", 5, "slobodno"],
                ["E", 6, "zauzeto"], ["E", 7, "slobodno"], ["E", 8, "slobodno"], ["E", 9, "rezervisano"], ["E", 10, "slobodno"],

                ["F", 1, "slobodno"], ["F", 2, "slobodno"], ["F", 3, "zauzeto"], ["F", 4, "rezervisano"], ["F", 5, "slobodno"],
                ["F", 6, "slobodno"], ["F", 7, "zauzeto"], ["F", 8, "slobodno"], ["F", 9, "slobodno"], ["F", 10, "zauzeto"],

                ["G", 1, "rezervisano"], ["G", 2, "slobodno"], ["G", 3, "slobodno"], ["G", 4, "zauzeto"], ["G", 5, "slobodno"],
                ["G", 6, "slobodno"], ["G", 7, "slobodno"], ["G", 8, "rezervisano"], ["G", 9, "zauzeto"], ["G", 10, "slobodno"],

                ["H", 1, "slobodno"], ["H", 2, "zauzeto"], ["H", 3, "slobodno"], ["H", 4, "slobodno"], ["H", 5, "rezervisano"],
                ["H", 6, "slobodno"], ["H", 7, "zauzeto"], ["H", 8, "slobodno"], ["H", 9, "slobodno"], ["H", 10, "slobodno"]
            ])
        },
        {
            film: "Luca",
            vrijeme: "16:00",
            sala: 5,
            poster: "https://m.media-amazon.com/images/M/MV5BMWMyNGNlZTktODVkNS00ZmMyLTk0NmUtNWVjOWU1MWMzZGMzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            sjedista: generisiSjedista([
                ["A", 1, "slobodno"], ["A", 2, "slobodno"], ["A", 3, "rezervisano"], ["A", 4, "zauzeto"], ["A", 5, "slobodno"],
                ["A", 6, "slobodno"], ["A", 7, "zauzeto"], ["A", 8, "slobodno"], ["A", 9, "rezervisano"], ["A", 10, "slobodno"],

                ["B", 1, "zauzeto"], ["B", 2, "slobodno"], ["B", 3, "slobodno"], ["B", 4, "slobodno"], ["B", 5, "rezervisano"],
                ["B", 6, "slobodno"], ["B", 7, "zauzeto"], ["B", 8, "slobodno"], ["B", 9, "slobodno"], ["B", 10, "slobodno"],

                ["C", 1, "slobodno"], ["C", 2, "zauzeto"], ["C", 3, "slobodno"], ["C", 4, "slobodno"], ["C", 5, "slobodno"],
                ["C", 6, "rezervisano"], ["C", 7, "slobodno"], ["C", 8, "zauzeto"], ["C", 9, "slobodno"], ["C", 10, "slobodno"],

                ["D", 1, "slobodno"], ["D", 2, "slobodno"], ["D", 3, "zauzeto"], ["D", 4, "rezervisano"], ["D", 5, "slobodno"],
                ["D", 6, "slobodno"], ["D", 7, "slobodno"], ["D", 8, "zauzeto"], ["D", 9, "slobodno"], ["D", 10, "rezervisano"],

                ["E", 1, "zauzeto"], ["E", 2, "slobodno"], ["E", 3, "slobodno"], ["E", 4, "slobodno"], ["E", 5, "rezervisano"],
                ["E", 6, "slobodno"], ["E", 7, "zauzeto"], ["E", 8, "slobodno"], ["E", 9, "slobodno"], ["E", 10, "slobodno"],

                ["F", 1, "slobodno"], ["F", 2, "rezervisano"], ["F", 3, "slobodno"], ["F", 4, "zauzeto"], ["F", 5, "slobodno"],
                ["F", 6, "slobodno"], ["F", 7, "slobodno"], ["F", 8, "slobodno"], ["F", 9, "zauzeto"], ["F", 10, "slobodno"],

                ["G", 1, "rezervisano"], ["G", 2, "slobodno"], ["G", 3, "slobodno"], ["G", 4, "zauzeto"], ["G", 5, "slobodno"],
                ["G", 6, "slobodno"], ["G", 7, "zauzeto"], ["G", 8, "slobodno"], ["G", 9, "slobodno"], ["G", 10, "rezervisano"],

                ["H", 1, "slobodno"], ["H", 2, "slobodno"], ["H", 3, "zauzeto"], ["H", 4, "slobodno"], ["H", 5, "slobodno"],
                ["H", 6, "rezervisano"], ["H", 7, "slobodno"], ["H", 8, "zauzeto"], ["H", 9, "slobodno"], ["H", 10, "slobodno"]
            ])
        }
    ]
};
ucitajRezervacije(podaci);
prikaziSalu(podaci);