// Variables

let num1=24
let num2: number;

num2 = 48

// Tableaux
let arr = ['chien', "chat", "poisson"]

arr[0] = "cheval"

// arr[1] = false

let tableau: (number | boolean)[] = []

tableau.push(false)
console.log(tableau);

// Les Objets
interface Player{
    id: number,
    name: string,
    jersey?: number | string
}
let platini:Player = {
    id: 0,
    name: "Platini",
    jersey: 10
}

console.log(typeof platini.jersey);




// Les Classes

class Singer {
    id: number;
    name: string;
    alive?: boolean

    constructor(id: number, name: string, alive?:boolean) {
        this.id = id;
        this.name = name;
        this.alive = alive 
    }
}
// const prince = new Singer(0, "Prince")
// console.log(prince);

// Les Fonctions

const sayMyName = (name: string) =>{
    console.log( `Hello ${name}` );
    
};

sayMyName('Berny');

const ageCaptain = (name: string, age: number | string, size?: number): void => {
    //Le fait d'écrire 'void' signifie qu'on attend rien en return

    if (size) {
        console.log(`Le capitaine ${name} a ${age} ans et mesure ${size} cm `);
    } else {
        console.log(`Le capitaine ${name} a ${age} ans`);
    }
    
    
}

ageCaptain("Nemo", 64, 180)

ageCaptain('Haddock', 59)

// Enum et Tuple

    //#Tuple
interface User {
    name: string;
    attributes: [number, string];
    role?: Role

}

const user1:  User = {
    name: "Bern",
    attributes: [30, "Funky"], 
    
}

console.log(user1);

    //#Enum

    enum Role {ADMIN, PREMIUM, BASIC}

const user2:User = {
    name:"BC",
    attributes: [55, "Rock Hard"],
    role: Role.BASIC
}

console.log(user2);

if (user2.role === Role.ADMIN) {
    console.log("Admin: connexion autorisée");
    
} else {
    console.log("Vous n'êtes pas autorisé à vous connecter");
    
}
