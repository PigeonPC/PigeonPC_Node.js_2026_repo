let plants;

async function fetchPlants() {
    if (!plants) {
        console.log("FETCHING")
        const response = await fetch("https://www.plantsolve.com/api/v1/plants/index.json");
        plants = await response.json();
    }
    return plants;
}

await fetchPlants();

export default fetchPlants;