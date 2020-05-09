const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 600
})

/*

correction scrollIntoView

// devient un tableau par le querySelectorAll
let links = document.querySelectorAll('a[href^="#');

links.forEach(link => {
    // on récupère le lien
    link.addEventListener('click', function(e) {
        // on désactive le lien
        e.preventDefault();
        // pour que chaque lien ramène à la bonne position
        let anchor = this.getAttribute('href');
        document.querySelector(anchor).scrollIntoView({
            behavior: 'smooth'
        });
    })
})

a[href^="#"] --> tout les liens qui commencent par #
a[href=^"#"] --> tout les liens qui ne commencent pas par #

correction scrollIntoView :

document.querySelector('li:last-of-type').addEventListener('click', (e) => {
    // enlever l'événement par défaut (aller directement sur)
    e.preventDefault();
    document.getElementById('fable5').scrollIntoView({
        behavior: 'smooth'
    })
});



/*

CREER CHRONO

let label = document.querySelector('.timer');
let time;
let idTimer; 

function timer(){
    time = parseInt(label.innerHTML);
    time++;
    if(time % 10 == 0){
        label.style.backgroundColor = '#' + changeColor();
    }

    label.innerHTML = time;
}
// setInterval()
document.querySelector('.start').addEventListener('click', () => {
    idTimer = setInterval(timer, 1000);
});

document.querySelector('.stop').addEventListener('click', () => {
    clearInterval(idTimer);
});

document.querySelector('.reset').addEventListener('click', () => {
    clearInterval(idTimer);
    label.innerHTML = 0;
});


function changeColor () {
    return Math.floor(Math.random()*16777215).toString(16);
}

*/

/*

correction 2 AMADOU

let angle = 0;
let square = document.querySelector('div');
function rotate(){
    angle = angle + 15;
    if(angle >= 360){
        angle = 0;
    }
    square.style.transform = 'rotate(' + angle + 'deg)';
    requestAnimationFrame(rotate);
}

window.addEventListener('load', () => {
    requestAnimationFrame(rotate);
});

coorection 3 avec timeOut

// setInterval()

// setTimeout()

// requestAnimationFrame()

let label = document.querySelector('.timer');
let time;
let idTimer;
let idTimeout;

function timer(){
    time = parseInt(label.innerHTML);
    time++;
    if(time % 10 == 0){
        label.style.backgroundColor = '#' + changeColor();
    }

    label.innerHTML = time;
}
// setInterval()
document.querySelector('.start').addEventListener('click', () => {
    // annule l'effet du setTimeout au clic sur le bouton start
    clearTimeout(idTimeout);
    idTimer = setInterval(timer, 1000);
});

document.querySelector('.stop').addEventListener('click', () => {
    clearInterval(idTimer);
    // reset l'écran au bout de trois s d'inactivité
    idTimeout = setTimeout(autoReset, 5000);
});

document.querySelector('.reset').addEventListener('click', () => {
    clearInterval(idTimer);
    label.innerHTML = 0;
});


function changeColor() {
    return Math.floor(Math.random()*16777215).toString(16);
}


function autoReset(){
    label.innerHTML = 0;
}
*/