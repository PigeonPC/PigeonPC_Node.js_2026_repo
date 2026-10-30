fetch('/api/plants')
.then((response) => response.json())
.then((result) => {
    const plantsListDataList = document.getElementById('plants-list');


    result.data.forEach((plant) => {
        const plantsListOption = document.createElement('option');
        plantsListOption.value = plant.slug;
        
        plantsListDataList.appendChild(plantsListOption);
    });
});

async function addPlant() {
    const plantSlug = document.getElementById('plants-list-search-input').value;

    const plantsSection = document.getElementById('plants');


    const response = await fetch(`/api/plants/${plantSlug}`);
    const result = await response.json();
    const plant = result.data;

    if (!plant) {
        console.log("Did not find a plant. Please select a plant");
    }

    const imageURL = "https://www.plantsolve.com/" + sanitizeXSS(plant.featuredImage);
    
    console.log(plant);
    
    const plantsDiv = document.createElement('div');
    plantsDiv.innerHTML = `
        <h3>${sanitizeXSS(plantSlug)}</h3>

        <h4>${sanitizeXSS(plant.care.watering)}</h4>

        <img class="plant-image" src="${imageURL}" alt="Plant image ${plantSlug}">

        <p>${sanitizeXSS(plant.quickAnswer)}</p>
        
    `;

    plantsSection.appendChild(plantsDiv);
}