//Global scope
const name = "Ralf Sebastian Anvelt"
// DATA TYPES
// Number (Int, float) = 42
// Boolean = true/false, jah/ei, 1/0
// const isMate = false
// Array = []
// String = "See on string väärtus", 'See on samuti string väärtus', `See on ka string väärtus´
// Object = {}


// Muutujad - nimetus ja väärtus (NB: Muutumatu vs muudetav)
// Muutujate nimetus on camelCase and it makes some sense
const fruit = 'Banaan'; //Muutuja, mida ei saa enam muuta
let model = 'BMW'; //Muutuja, mida saab veel muuta

// Koodiblokk => Scope
// Koodiblokki tähistab {} sümbol (objekti sümbol)
// Function scope
const calculateSum = (number1, number2) => {
    const number3 = 256;
    //console.log(name);
    return number1 + number2;
};

calculateSum (1, 2)

// Type casting
// Muudame number andmetüübi string andmetüübiks
const castNumber = "123456";
console.log(typeof Number(castNumber));
console.log(Boolean(castNumber));

// Array => sümbol on [], toimub indekseerimine, esimene element on kohal 0
const characters = ["T", "P", "I","R", "C", "S", "V", "A", "J"]

//console.log(characters[7]); 
//console.log(characters[6]); 
//console.log(characters[5]); 
//console.log(characters[6]); 
//console.log(characters[4]); 
//console.log(characters[3]); 
//console.log(characters[8]); 
//console.log(characters[2]); 
//console.log(characters[1]); 
//console.log(characters[0]);

// Loopimine => korduslause. Igast array elemendist minnakse üle ja käiakse läbi script
// For loop

for(i = 0; i < characters.length; i++) {
    console.log("For loop:", characters[i])
}

// forEach loop 
characters.forEach((character) => {
    console.log("For each loop:", character)
})

// Map loop
characters.map((char) =>{
    console.log("For each loop:", char);
})