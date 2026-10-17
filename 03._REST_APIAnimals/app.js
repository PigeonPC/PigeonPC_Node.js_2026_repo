const express = require("express");

const app = express();

const animals = [
    { id: 1, name: "Parrot", age: 34 },
    { id: 2, name: "Pelican", url: "https://da.wikipedia.org/wiki/Flamingoer#/media/Fil:Westfalenpark-100821-17771-Flamingo.jpg" },
];

app.get('/animals', (req, res) => {
    res.send({ data: animals });
});

app.get('/animals/:id', (req, res) => {
    const providedId = Number(req.params.id);
    const foundAnimal = animals.find((foundAnimal) => foundAnimal.id === providedId);

    if (!foundAnimal) {
        res.send({ data: `No animal found by id ${providedId}`})
    } else {
        res.send({ data: foundAnimal });
    }
})


// 2xx OK
// 3xx Redirect
// 4xx Client-sider error
// 5xx Server-side error



app.listen(8080, (error) => {
    console.log("Server is running on port ", 8080);

    if (error) {
        console.log("Error running on the server", error);
        return;
    }

});

console.log("This line will be printed before app.listen!");
