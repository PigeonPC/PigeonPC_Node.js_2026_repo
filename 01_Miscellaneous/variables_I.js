// Node REPL (Read-evaluate-print-loop) - JavaScript console

// Type Coercion

// node <filename> -kør filen i node

// Printe i Javascript
// console.log("Adam")

// Deklarere en variabel
// RULE: Brug const når muligt, ellers brug let
// Const betyder at det er contant in the assignment
// er ikke immutable, men assignment er constant
// const er ikke immutable, der kan stadig ændres i const

const myFavoriteNumber = 7

// ____________________________________________________________________

// et objekt, et JavaScript objekt:
// Hvis det var JSON skal det ikke have "" om både "name" og "Adam". Og supporter ikke kommentarer.

const person = {
    // key-value pair
    name: "Adam"
};

// tilføjer en ny key-value pair til objektet
person.age = 30;

// Slet navnet under objektet person
// delete person.name;

// Print
console.log(person);

// ____________________________________________________________________


// ARRAY
const things = ["mouse"];

// Tilføj til array
things.push("car");

// Fjerner sidste ting i array, så car
//things.pop();

console.log(things);

// RULE: Brug komma i console.log ford hvis vi bruger + (concatenate) kan vi muligvis ændre på værdierne
console.log(things[0], things[1]); 
//printer mouse[0], og car[1]


// ____________________________________________________________________

// Data types in JavaScript: 8 typer
// Strings, Boolean, Number, BigInt, null, undefined, Object, Symbol

// Array er en type af objekt

// ____________________________________________________________________


const greetingOne = "Hej, godt at se dig igen";

// Man kan godt have "" inde i , hvis man brugte '' yderst.
const greetingTwo = 'Hej, godt at se dig "ven"';

// Hvis man gerne vil bruge både '' og "", kan du bruge ``
// Den kan også bruges multiline, og det kan de andre typer ikke.
const greetingThree = `Hej med 'dig', "${person.name}"


Booh`;

console.log(greetingOne);
console.log(greetingTwo);
console.log(greetingThree);

// Hvis man skriver ${} er det javascript der eksikveres

