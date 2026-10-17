import express from 'express';
const app = express();

app.use(express.static('public'));

import path from 'path';

import fetchPlants from './util/fetchPlants.js';


//==============================================================================
// PAGES
//==============================================================================

app.get('/', (req, res) => {
    res.sendFile(path.resolve('./public/pages/frontpage/frontpage.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.resolve('./public/pages/about/about.html'));
})

app.get('/contact', (req, res) => {
    res.sendFile(path.resolve('./public/pages/contact/contact.html'));
})

//==============================================================================
// API
//==============================================================================
app.get('api/plants', async (req, res) => {
    res.send({data: await fetchPlants});
});


//==============================================================================

// Short circut operator
// console.log(undefined || 8080);

// NULLISH COALESCENCE
//console.log(undefined ?? 8080);
//console.log("" ?? 8080);

const PORT = process.env.PORT ?? 8080;

const server = app.listen(PORT, (error) => {
    if(error) {
        console.log("Error starting the server:", error);
        return;
    }
    console.log("Server is running on port", server.address().port);
});