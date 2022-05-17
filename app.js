//aanmaken van een functie
//const nameChanged = function(event) {
//    console.log(event.target.value);
//}

// EEN FUNCTIE WERKT PAS ALS JE HET OPROEPT!!!
// nameChanged();

let name;
let country;
let p = document.getElementById("output");
let nameChange = document.getElementById("nameChange");
let countryChange = document.getElementById("countryChange");
console.log(countryChange);

nameChange.addEventListener("change", function(){
    name = event.target.value;
    changeInput();
})

countryChange.addEventListener("change", function(){
    country = event.target.value;
    changeInput();
})


// const nameChanged = function(event) {
//     name = event.target.value;
//     changeInput();
// }

// const countryChange = function(event) {
//     country = event.target.value;
//     changeInput();
// }

const changeInput = function() {
    const text = `Je heet ${name} en je komt uit ${country}`; 
    p.textContent = text;
}

console.log("llu");

