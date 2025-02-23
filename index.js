"use strict";
// Variables
let num1 = 24;
let num2;
num2 = 48;
// Tableaux
let arr = ['chien', "chat", "poisson"];
arr[0] = "cheval";
// arr[1] = false
let tableau = [];
tableau.push(false);
console.log(tableau);
let platini = {
    id: 0,
    name: "Platini",
    // jersey: 10
};
// Les Classes
class Singer {
    constructor(id, name, alive) {
        this.id = id;
        this.name = name;
        this.alive = alive;
    }
}
// const prince = new Singer(0, "Prince")
// console.log(prince);
// Les Fonctions
const sayMyName = (name) => {
    console.log(`Hello ${name}`);
};
sayMyName('Berny');
const ageCaptain = (name, age, size) => {
    //Le fait d'écrire 'void' signifie qu'on attend rien en return
    if (size) {
        console.log(`Le capitaine ${name} a ${age} ans et mesure ${size} cm `);
    }
    else {
        console.log(`Le capitaine ${name} a ${age} ans`);
    }
};
ageCaptain("Nemo", 64, 180);
ageCaptain('Haddock', 59);
const user1 = {
    name: "Bern",
    attributes: [30, "Funky"],
};
console.log(user1);
//#Enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["PREMIUM"] = 1] = "PREMIUM";
    Role[Role["BASIC"] = 2] = "BASIC";
})(Role || (Role = {}));
const user2 = {
    name: "BC",
    attributes: [55, "Rock Hard"],
    role: Role.BASIC
};
console.log(user2);
if (user2.role === Role.ADMIN) {
    console.log("Admin: connexion spéciale");
}
else {
    console.log("Vous n'êtes pas autorisé à vous connecter");
}
