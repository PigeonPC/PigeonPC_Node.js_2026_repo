fetch('api/plants')
    .then((response) => response.json())
    .then((result) => {
        console.log(result)


        console.log(result.data);


        result.data.forEach((plant) => {
            const plantsListOption = document.createElement('option');
            plantsListOption.value = plant.slug;;

            plantsListDataList.appendChild(plantsListOption);
        })
    });

function addPlant() {
    const plantName = document.getElementById('plants-list-search-input').value;

    const plantSection = document.getElementById('plants');

    const plantsDiv = document.createElement('div');
    plantsDiv.innerHTML = `
        <h3>New Plant</h3>
        `;


    fetch ()
    
 
}