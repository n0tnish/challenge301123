let people = [
    "Esmelda",
    "Ni-shaat",
    "Sivu",
    "Jodie",
    "Razien",
    "Luqi",
    "Sipho",
    "Reza",
    "Phinda",
    "Shawn",
    "Zubi",
    "Aakeefah",
    "Ni'mat",
    "Kamilah",
    "Nadhirah",
    "Yahya",
    "Zakariya",
    "Alde",
    "Chad",
    "Zion"
];

const sorted = false;

function displayPeople() {
    let searchInput = document.getElementById("search").value.trim().toLowerCase();
    let result = document.getElementById("result");
    let filteredPeople = [];

    if (searchInput === "") {
        filteredPeople = people;
    } else {
        filteredPeople = people.filter(function (person) {
            return person.toLowerCase().includes(searchInput);
        });
    }

    if (filteredPeople.length === 0) {
        result.innerHTML = "Name not found.";
    } else {
        if (sorted) {
            filteredPeople.sort();
        } else {
            filteredPeople.sort().reverse();
        }
        result.innerHTML = "";
        for (let i = 0; i < filteredPeople.length; i++) {
            result.innerHTML += filteredPeople[i] + "<br>";
        }
    }
}

function toggleSorting() {
    sorted = !sorted;
    displayPeople();
}

document.getElementById("search").addEventListener("keyup", displayPeople);