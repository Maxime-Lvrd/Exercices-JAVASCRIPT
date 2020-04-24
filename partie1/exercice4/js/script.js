const button = document.querySelector('button');

button.onclick = function() {
    let name = prompt("Quel est votre nom ?");
    let age = prompt("Quel est votre age ?");
    let city = prompt("Quel est le nom de votre ville ?");
    alert("Bonjour " + name + ", âgé de " + age + " ans et vivant à " + city + ", et bienvenue !");
}