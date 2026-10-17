// "use strict";

// totalGlobalVariable = "Never EVER do this";

const public = "This is a public variable" 

// var globalVariable = "This variable is in a global scope"; // Kan tilgås over alt, i andre scopes

// Dette er ikke et objekt, manger key:value
// Det er et Block Scope
{
    console.log("What is this")
}

{
    var someValue = 123;
    {
        var someValue = 456;
    }
    console.log(someValue); //someValue er 456, det kunne fx også ske, hvis 456 var i en anden fil, og det er svært at debug!
}

{
    let someOtherValue = true;
    {
        let someOtherValue = false;
    }
    console.log(someOtherValue); //let bløder ikke ud i andre scopes! Derfor er someOtherValue true!!
}


// Her udskyder vi et forloop med 1sek (1000 millisek)
// Det der er mærkeligt her, er at var bløder ud i scope! Det resulterer at logge 6 seks gange.
// Den logger den seks gange, fordi den starter på 0.
for (var i = 0; i <= 5; i++) { 
    setTimeout(() => {
        console.log(i)
    }, 1000);
}

// brug let i stedet!!
for (let i = 0; i <= 5; i++) { 
    setTimeout(() => {
        console.log(i)
    }, 1000);
}