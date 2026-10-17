const express = require('express');
const app = express();
app.use(express.json()); // Skal kunne læse JSON for at læse fra request body

//============================================================================

const animals = [
    {
        id: 1,
        species: 'Elephant',
        name: 'Scout'
    },
    {
        id: 2,
        species: 'Horse',
        name: 'Magnus'
    },
    {
        id: 3,
        species: 'Fish',
        name: 'Fishy'
    },
    {
        id: 4,
        species: 'Bird',
        name: 'Pigeon'
    }
]

//============================================================================

GET     /animals
GET     /animals/{id}
POST    /animals
PUT     /animals/{id}
PATCH   /animals/{id}
DELETE  /animals/{id}

//============================================================================

app.get('/', (req, res) => {
    res.send({ data: "Hi, from animals.js" });
});

//============================================================================

// GET ALL ANIMALS
app.get('/animals', (req, res) => {
    res.send({ data: animals });
})

//============================================================================

// GET A SPECIFIC ANIMAL
app.get('/animals/:id', (req, res) => {
    const getAnimalId = Number(req.params.id);
    const animal = animals.find((animal) => animal.id === getAnimalId);

    if (!animal) {
        return res.status(404).send({ data: 'Animal not found' });
    }

    res.send({ data: animal });
});

//============================================================================

let currentId = 4;

// CREATE A NEW ANIMAL - Anders version!
app.post('/animals', (req, res) => {

    const providedAnimal = req.body;

    console.log(providedAnimal);

    providedAnimal.id = nextId++

    animals.push(providedAnimal);

    res.status(201).send({ data: providedAnimal });
});

/*
// CREATE A NEW ANIMAL - Min version.
app.post('/animals', (req, res) => {
    currentId++;

    const newAnimal = {
        id: currentId,  
        species: req.body.species,
        name: req.body.name
    };

    animals.push(newAnimal);

    res.status(201).send({ data: newAnimal });
});
*/

//============================================================================

// REPLACE AN ANIMAL
app.put('/animals/:id', (req, res) => {
    const putAnimalId = Number(req.params.id);
    const putAnimalindex = animals.findIndex(
        (animal) => animal.id === putAnimalId
    );

    if (putAnimalindex === -1) {
        return res.status(404).send({ data: 'Animal not found' });
    }

    const replacedAnimal = req.body;

    animals[putAnimalindex] = replacedAnimal;

    res.send({ data: replacedAnimal });
});

//============================================================================


// REPLACE PARTS OF AN ANIMAL - Anders version!
app.patch('/animals/:id', (req, res) => {
    const patchAnimalId = Number(req.params.id);
    const patchAnimalIndex = animals.findIndex(
        (animal) => animal.id === patchAnimalId
    );

    if (patchAnimalIndex === -1) {
        return res.status(404).send({ data: 'Animal not found' });
    }

    const providedAnimal = req.body;
    const foundAnimal = animals[patchAnimalIndex];

    const animalToCreate = { ...foundAnimal, ...providedAnimal, id: patchAnimalId };

    animals[patchAnimalIndex] = animalToCreate;

    res.send({ data: updatedAnimal });

})

/*
// REPLACE PARTS OF AN ANIMAL - Min version!
app.patch('/animals/:id', (req, res) => {
    const patchAnimalId = Number(req.params.id);
    const patchAnimalIndex = animals.findIndex(
        (animal) => animal.id === patchAnimalId
    );

    if (patchAnimalIndex === -1) {
        return res.status(404).send({ data: 'Animal not found' });
    }

    const updatedAnimal = {
        ...animals[patchAnimalIndex],   //Behold eksisterende oplysninger
        ...req.body,                    //Overskriv de felter der er sendt
        id: patchAnimalId               //Behold id fra URL
    };

    animals[patchAnimalIndex] = updatedAnimal;

    res.send({ data: updatedAnimal });
})
*/

//============================================================================

// DELETE AN ANIMAL
app.delete('/animals/:id', (req, res) => {
    const deleteAnimalId = Number(req.params.id);

    const deleteAnimalIndex = animals.findIndex(
        (animal) => animal.id === deleteAnimalId
    );

    if (deleteAnimalIndex === -1) {
        return res.status(404).send({ data: 'Animal not found' });
    }

    const deletedAnimal = animals.splice(deleteAnimalIndex, 1)[0];

    res.send({ data: deletedAnimal });
});

//============================================================================

app.listen(8081);

