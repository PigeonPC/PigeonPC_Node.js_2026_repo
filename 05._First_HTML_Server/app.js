import express from 'express';
//const express = require('express');
const app = express();

app.use(express.static('public')); //Den her linje gav serveren adgang til CSS, dvs det i public!

import path from 'path';

import fruitPackage from './util/fruitsUtilESModules.js';
console.log(fruitPackage.slogan, fruitPackage.fruits);


app.get('/', (req, res) => {
    res.sendFile(path.resolve('./public/frontpage/index.html'))
})

app.get('/fruits', (req, res) => {
    res.sendFile(path.resolve('./public/frontpage/fruits.html'))
})

app.get('/redirection', (req, res) => {
    res.sendFile(path.resolve('./public/redirection/redirection.html'))
})




let counter = 0;
app.get('/api/counter', (req, res) => {
    res.send({ data: ++counter });
});


app.listen(8080, (error) => {
    if(error) {
        console.log(error);
        return;
    }

    console.log("Server is running on port", 8080);
});

