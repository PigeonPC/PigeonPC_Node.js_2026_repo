const express = require('express'); //den leder i node_modules
const app = express();

// Hvis man vil skrive det i én linje
// const app = require('express')();


//Det her er en JSON parser, fra library, som gør, at den kan tage imod JSON fra /POST
app.use(express.json()) 


//________________________________________________________________


// Task: make a route for the endpoint / witch returns a greeting   

// console.log(__dirname); 
// __dirname, giver stien på det sted node kører

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // Her bruger vi __dirname, til at få det her dir, som index bor i. Den gør det meget gentageligt for andre programmører
});


app.get('/xss', (req, res) => {
    res.sendFile(__dirname + '/xxs.html');
});

//________________________________________________________________

// Callback function: a function reference provided as an argument with the possibility (perhaps) of being called later

// Functions as first-class citizens = I can do with functions what i can do with other data types

        // endpoint   // callback function
app.get('/blablabla', (req, res) => {
    res.send({data: "They talk a lot."}); //Det her er ikke JSON, men Javascript objekt, som express oversætter til JSON
});
// DEFINITION: The whole thing = route


// How can I send data in a GET request
// path variable: /users/1
// query parameters: ?userId=1&likesProgramming=true


// SERVER REDIRECTION
app.get('/chatterroom', (req, res) => {
    res.redirect('/blablabla');
}) 


// create a /beers route
app.get('/beers/:beerType/:amount', (req, res) => {
    console.log(req.params.beerType)
    res.send({data: `You ordered ${req.params.amount} of ${req.params.beerType}`});
});
// req og res kan i princippet hedde noget andet, men det er konventionen at bruge res/req

// you ordered <amount> of <beerType>

app.get('/bars/forgottenItems', (req, res) => {
    console.log(req.query);
    res.send({ data: req.query});
});


app.get('/proxy', (req, res) => {
    /*  assignment 
        Make a request to google: https://www.google.com/
        and serve it here
        This is called a proxy
    */

    fetch('https://www.google.com/')
    .then((response) => response.text())
    .then((result) => res.send(result));

    //Proxyen her er mellemmand i den forstand
    //At klienten bede proxy om google, og proxyen spørger google om google og sender tilbage.

});

app.post('/dictators', (req, res) => {
    console.log(req.body);
    res.send({});
});

// TASK: Create a patch for dictators
app.patch('/dictators/:name', (req, res) => {
    res.send({ data: `You have turned the great dictator - ${req.params.name} - benevolent for life`});
});


app.listen(8080);
