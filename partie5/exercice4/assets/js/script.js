// https://www.w3schools.com/js/pic_bulbon.gif

// Sélection de la balise img via son sélecteur css 
let img = document.querySelector('img');

// rattache un évènement à l'élément html img

img.addEventListener('click', function(){
    // this fait référence l'objet courant, ici l'img qui a été cliquée
    this.src = 'https://www.w3schools.com/js/pic_bulbon.gif';
    this.setAttribute('alt', 'photo d\'une lampe allumée' );
});
// Changement de taille de l'image au survol de la sourie
img.addEventListener('mouseover', function(){
    this.style.width = "400px";
});