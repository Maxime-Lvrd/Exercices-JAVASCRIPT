const button = document.querySelector('button');

button.onclick = function() {
    let nbr = parseInt(prompt("Votre nombre :"));
    if (nbr%2 == 0) {
        alert("Le nombre est pair !");
    } else {
        alert("Le nombre est impair !")
    }
}