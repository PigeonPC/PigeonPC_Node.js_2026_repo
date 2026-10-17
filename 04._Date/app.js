const express = require('express');
const app = express();

//============================================================================

app.get('/', (req, res) => {
    res.send({ data: "Hi from app.js" })
});

//============================================================================

console.log(new Date);
// UTC tid! Zuli time!
// 2026-09-18T08:05:30.770Z

console.log(Date());
// Fri Sep 18 2026 10:07:29 GMT+0200 (Central European Summer Time)

console.log(Date.now());
// 1789719016499
// Unix Epoch Time

//============================================================================

// Array er bedre udenfor Get metoden, så Arrayet ikke oprettes på ny igen og igen.

const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

// TASK: RETURN CURRENT MONTH:
app.get('/months/v1', (req, res) => {

    const currentMonth = months[new Date().getMonth()];

    res.send({ data: currentMonth });

});

// VERSION 2
app.get('/months/v2', (req, res) => {
    const currentMonth = new Date().toLocaleDateString('en-uk', { month: 'long' });

    res.send({ data: currentMonth })

});

//============================================================================

// TASK: Create a route that serves /days whitch returns the current day

// Sunday first! Because of the American calendar!
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

app.get('/days/v1', (req, res) => {
    const currentDay = days[new Date().getDay()];

    res.send({ date: currentDay });
});


// Man kan også skrive da-dk og få det på dansk!
app.get('/days/v2', (req, res) => {
    const currentDay = new Date().toLocaleDateString('en-uk', {weekday: 'long'});

    res.send({ date: currentDay });
});

//============================================================================


app.listen(8080, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("Server is running on port", 8080);
});