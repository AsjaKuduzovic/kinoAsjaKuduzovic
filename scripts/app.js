const podaci = {
    projekcije: [
        {
            film: "F1: The Movie",
            vrijeme: "20:00",
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
            sjedista: generisiSjedista([
                ["A", 1, "slobodno"], ["A", 2, "slobodno"], ["A", 3, "zauzeto"], ["A", 4, "slobodno"], ["A", 5, "rezervisano"],
                ["B", 1, "slobodno"], ["B", 2, "zauzeto"], ["B", 3, "slobodno"], ["B", 4, "slobodno"], ["B", 5, "zauzeto"],
                ["C", 1, "rezervisano"], ["C", 2, "slobodno"], ["C", 3, "zauzeto"], ["C", 4, "slobodno"], ["C", 5, "slobodno"]
            ])
        },
        {
            film: "Scarface",
            vrijeme: "21:30",
            sjedista: generisiSjedista([
                ["A", 1, "zauzeto"], ["A", 2, "zauzeto"], ["A", 3, "slobodno"], ["A", 4, "slobodno"], ["A", 5, "slobodno"],
                ["B", 1, "slobodno"], ["B", 2, "rezervisano"], ["B", 3, "slobodno"], ["B", 4, "zauzeto"], ["B", 5, "slobodno"],
                ["C", 1, "slobodno"], ["C", 2, "slobodno"], ["C", 3, "slobodno"], ["C", 4, "zauzeto"], ["C", 5, "rezervisano"]
            ])
        }
    ]
};

prikaziSalu(podaci);