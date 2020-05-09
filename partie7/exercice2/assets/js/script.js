function setBold () {
    console.log('test1');
    document.querySelector("body").style.fontWeight = 'bold';
}

function changeColor () {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log('test2');
    document.querySelector("body").style.color = '#' + randomColor;
}

function grow () {
    console.log('test3');
    document.querySelector("body").style.fontSize = '20px';
}

let boldButton = document.getElementById('bold');
boldButton.addEventListener('click', setBold);

let colorButton = document.getElementById('color');
colorButton.addEventListener('click', changeColor);

let sizeButton = document.getElementById('size');
sizeButton.addEventListener('click', grow);