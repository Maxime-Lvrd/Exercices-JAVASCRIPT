/*
 
// sayHello('Clément');

function sayHello(name){
    window.alert(`Hello ${name}`);
}

// sayHello('Brian');
// sayHello('Mat');

// (function(){
//     let name = 'Steven'
//     window.alert(`hello ${name}`);
// })();

let sayHello = function sayHello(name){
    window.alert(`Hello ${name}`);
};

sayHello('Clément');

-----------------------------

function getFullName(firstName, lastName) {
    let fullName = ${firstName} ${lastName};
    alert(`Bonjour ` + fullName);
    return fullName;
}

// alert(`Bonjour `+ getFullName(`Brian`, `Fontaine`));

console.log(`Bonjour ` + getFullName(`Brian`, `Fontaine`));

document.getElementById('title').addEventListener('click', function() {
    alert('click');
});

--------------------------------

calculette Clément (+HTML)

function calculer(){

    var number1 = parseInt(document.getElementById('firstNumber').value);
    var number2 = parseInt(document.getElementById('secondNumber').value);

    if(document.getElementById('r1').checked){

        var addition = number1 + number2 ;

        document.getElementById('afficher').innerHTML = addition;
    }
    else if(document.getElementById('r2').checked){

        var soustraction = number1 - number2 ;

        document.getElementById('afficher').innerHTML = soustraction;
    }
    else if(document.getElementById('r3').checked){

        var multiplication = number1 * number2 ;

        document.getElementById('afficher').innerHTML = multiplication;
    }
    else if(document.getElementById('r4').checked){

        var division = number1 / number2 ;

        document.getElementById('afficher').innerHTML = division;
    }
    else{ 
        document.getElementById('afficher').innerHTML = "Veuillez cocher le champ manquant! :)";
}
}

-----------------------------------

correction AMADOU (+HTML)

*/

// bonus
function sum(firstNumber, secondNumber){
    return Number(firstNumber) + Number(secondNumber);
}
// bonus
function soustraction(firstNumber, secondNumber){
    return firstNumber - secondNumber;
}
// fonction de l'exercice 1
function multiply(firstNumber, secondNumber){
    return firstNumber * secondNumber;
}
// bonus
function division(firstNumber, secondNumber){
    return firstNumber / secondNumber;
}
// bonus
function calc(firstNumber, secondNumber, operator){
    switch(operator){
        case '+':
            return sum(firstNumber, secondNumber);
        case '-':
            return soustraction(firstNumber, secondNumber);
        case '*':
            return multiply(firstNumber, secondNumber);
        case '/':
            return division(firstNumber, secondNumber);
        default:
            return 'Error';
    }
}

document.querySelector('#result').addEventListener('click', function(){
    let firstNumber = document.querySelector('#firstNumber').value;
    let secondNumber = document.querySelector('#secondNumber').value;
    let operator = document.querySelector('input:checked').value;
    document.querySelector('#label').textContent = calc(firstNumber, secondNumber, operator);
});



/*
function multiply(number1, number2) {
    return number1 * number2;
}

console.log(multiply(2, 2));
console.log(multiply(1016164, 156461464));
*/