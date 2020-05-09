let firstNumber = 9;
let secondNumber = 2;

while(firstNumber / secondNumber > 1) {
    firstNumber /= secondNumber;
    console.log(firstNumber);
}
console.log(firstNumber);

/*

correction AMADOU

let firstNumber = Math.floor(Math.random()*10) + 1;
let secondNumber = Math.floor(Math.random()*10) + 1;

do {
    firstNumber /= secondNumber;
    if(firstNumber < 1) {
        break;
    }
    console.log(firstNumber);
}while(true);

*/