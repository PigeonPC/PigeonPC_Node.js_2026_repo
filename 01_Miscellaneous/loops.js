console.log("Loops")


// TYPES OF LOOP METHODS IN JS
// .map .filter .reduce .find .findIndex .indexOf (((.forEach)))

// .indexOf =
// .findIndex =
// .find =
// .reduce = can iterate through, and reduce it down somehow
// .find = find the first that match
// .filter = filters through based on what condition is set up. Returns a smaller list.
// .map = return a list that is the same size: 1:1
// .forEach =


// (Rules only for Loops in JS)
// Rule 1: Use Loop Methods In Javascript
// Rule 2: Don't use for loops unless you are finger counting (ex. count to 7). We prefer the LOOP METHODS in JS!
// Rule 3: Use .map if you need the data afterwards, otherwise only use .forEach if you don't.


// TASK: double the numbers
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => number * 2);
// console.log(doubledNumbers);


const numbersIterated = numbers.map((value, index, array) => console.log(value, index, array));
// har ikke påvirket (sideeffect) fx 1, fordi det ikke er et objekt, men bare en variabel.


// HVILKE ER BEDST CLEAN CODE?
// updatedGDPCountries
// countriesGDPUpdated
// countriesGDPUpdated
// NR. 2 eller 3, De er mest læsbare og starter med "countries"


// TASK: if the country is Lesotho, boost the gdp with 500.
const countries = [
    { name: "Lesotho", gdp: 530},
    { name: "Papua New Ginea", gdp: 1025},
    { name: "Saint Vincent and the Grenadines", gdp: 1200}
];
// console.log(countries);


/*
const countriesWithGDPUpdated = countries.map((country) => {
    if (country.name === "Lesotho") {
        country.gdp += 500;
    }
    return country;
});
*/

const countriesWithGDPUpdated = countries.map((country) => ({
        name: country.name,
        gdp: country.name === "Lesotho" ? country.gdp + 500 : country.gdp
}));

console.log(countriesWithGDPUpdated);


// TASK: filter out the countries where the gdp is below 1000 in the countries variable

const countriesWithFilteredGDP = countries.filter((country) => country.gdp > 1000);

console.log(countriesWithFilteredGDP);
// In functional programming, we want to not affect earlier variables, but make new ones instead. Reduce sideeffects.
