/*

COURS

fonction fléchée = fonction expression
quand une seule instruction : pas {} ni de return quand =>
quand plus d'une insctruction : {} et return même avec =>

*/

// bonus
// function sum(firstNumber, secondNumber){
//    return Number(firstNumber) + Number(secondNumber);
// }

// bonus fonction fléchée
sum = (firstNumber, secondNumber) => Number(firstNumber) + Number(secondNumber);

// bonus
function soustraction(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}
// fonction de l'exercice 1
function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}
// bonus
function division(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}
// ajout de l'opération carré
let square = number => number * number;

// bonus
function calc(firstNumber, secondNumber, operator) {
    switch (operator) {
        case '+':
            return sum(firstNumber, secondNumber);
        case '-':
            return soustraction(firstNumber, secondNumber);
        case '*':
            return multiply(firstNumber, secondNumber);
        case '/':
            return division(firstNumber, secondNumber);
            // à la fin de la fonctio calc
        case '^':
            return square(firstNumber);
        default:
            return 'Error';
    }
}

document.querySelector('#result').addEventListener('click', function () {
    let firstNumber = document.querySelector('#firstNumber').value;
    let secondNumber = document.querySelector('#secondNumber').value;
    let operator = document.querySelector('input:checked').value;
    document.querySelector('#label').textContent = calc(firstNumber, secondNumber, operator);
});