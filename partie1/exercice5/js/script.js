const button = document.querySelector("button");

button.onclick = function() {
    let num1 = parseInt(prompt("Votre nombre numéro 1 :"));
    let num2 = parseInt(prompt("Votre nombre numéro 2 :"));
    let result = num1 + num2;
    alert(result)
    console.info("Addition : ", num1, " + ", num2, " = ", result);
}

/* 

OU

let num1 = prompt("Votre nombre numéro 1 :");
let num2 = prompt("Votre nombre numéro 2 :");

let result = parseInt(num1) + parseInt(num2);

alert(result);

console.log(`la somme de ${num1} et de ${num2} est de ${result}`);

*/