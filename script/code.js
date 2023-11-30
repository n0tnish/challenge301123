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


function toggleSorting() {
    sorted = !sorted;
    displayPeople();
}

document.getElementById("search").addEventListener("keyup", displayPeople);