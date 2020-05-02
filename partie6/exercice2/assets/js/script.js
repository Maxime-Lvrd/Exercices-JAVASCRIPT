let p = document.createElement('p');

for(nbr = 0; nbr <= 100; nbr++) {
    // on crée une variable temporaire pour éviter d'écraser notre compteur
    let displayNbr = nbr;
    // on crée le span
    let span = document.createElement('span');
    // compteur des multiples de 15
    if(nbr % 15 == 0) {
        displayNbr = '...';
    }
    // insère le texte dans les span
    span.textContent = displayNbr;
    // insère les span dans le p
    p.appendChild(span);
}
// insère le p après le h2
document.querySelector('h2').insertAdjacentElement('afterend', p);