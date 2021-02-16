const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
    ];

const list = (neighbours) => {
    for (listOfNei of listOfNeighbours ) {
        for (let countries of listOfNei) {
            console.log(countries)
        }
    }
}

list(listOfNeighbours);
