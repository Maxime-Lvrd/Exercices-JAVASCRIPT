const button = document.querySelector('button');

button.onclick = function() {
    let age = parseInt(prompt("Quel est votre âge"));
    if (age >= 18) {
        alert("Vous êtes majeur !");
    } else {
        alert("Vous êtes mineur !")
    }
}