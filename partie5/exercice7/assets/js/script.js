// function pour modifier la taille de la police

function setFontSize(){

    // sélectionner l'élément que nous souhaitons modifier

    let body = document.querySelector('body');
    
    // récupérer sa taille actuelle de ma police

    let size = parseInt(getComputedStyle(body).fontSize);    
    // incrementation de la taille
    // size++
    // size = size + 1
    size += 1 
    // Maj la police avec la nouvelle taille
    body.style.fontSize = size + 'px';
}

// Ecouter l'évènement pour appeler la fonction

window.addEventListener('scroll', setFontSize);