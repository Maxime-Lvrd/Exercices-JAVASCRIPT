// nombre aléatoire de 2 à 9
let firstNumber = Math.floor(Math.random()*9) + 2;
let secondNumber = Math.floor(Math.random()*9) + 2;

while(firstNumber * secondNumber < 250) {
    secondNumber *= firstNumber;
    // OU secondNumber = secondNumber * firstNumber;
    console.log(secondNumber);
}
console.log(secondNumber);

/*

correction AMADOU

// tirage d'un nombre aléatoire compris entre 2 - 10
let firstNumber = Math.floor(Math.random()*9) + 2;
let secondNumber = Math.floor(Math.random()*9) + 2;

while(firstNumber * secondNumber < 250){
    // secondNumber = secondNumber * firstNumber;
    // on affecter le produit de firstNumber et secondNumber à secondNumber
    secondNumber *= firstNumber;
    console.log(secondNumber);
}

*/