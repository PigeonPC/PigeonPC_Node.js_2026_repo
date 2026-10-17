
// HOISTING: i JavaScript kan man godt kalde en funktion før den er deklareret!
// Den læser det hele først.
getRandomInt(5, 10);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// ANONYMOUS FUNCTION!
const getRandomIntAnonymousFunction = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

// console.log(getRandomIntAnonymousFunction(2, 4));


// ARROW FUNCTION, also anonymous
// Lidt svært at forstå.... I stil med en lambda expression??
const getRandomIntArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};



// _____________________________________________________________________

// CALLBACK FUNCTION
// GenericActionPerformer bruges i de næste to opgaver
// name er en string, action er en function
function genericActionPerformer(name, action) {
    return action(name);
}

// _____________________________________________________________________

// Elias, playing guitar
/* assignment
    Using the genericActionPerformer, can you make it say: Elias likes to play guitar
*/

function playingGuitarAction(name) {
    return`${name} likes to play guitar`;
}

console.log(genericActionPerformer("Elias", playingGuitarAction));

// _____________________________________________________________________

// Magnus, watch movies
/* 
Create an arrow function this times called watchingMoviesAction
*/

const watchingMoviesAction = (name) => {
    return `${name} likes to watch movies`
};

console.log(genericActionPerformer("Magnus", watchingMoviesAction));

// _____________________________________________________________________

// Jacob sailing
// Assignment: do the same as above as a one-liner below... it should log: Jacob likes sailing

console.log(genericActionPerformer("Jacob", (name => `${name} likes sailing`)));