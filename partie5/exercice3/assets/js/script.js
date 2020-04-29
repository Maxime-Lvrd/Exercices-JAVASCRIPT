let nameRegex = /^[A-Z][a-zéèç]+(?:(?:\s|-)[A-Z][a-zéèç]+)?$/i;
let ageRegex = /[0-9]{1,3}$/;
let emailRegex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;

function checkField(input, regex) {
    let value = input.value;
    // ! = si le texte renseigné ne match pas avec la regex
    if(!regex.test(value)) {
        // création balise span
        let span = document.createElement('span');
        // ajout d'un attribut class à span
        span.setAttribute('class', 'danger');
        // ajout du texte - contenu de span
        span.textContent = 'La saisie est incorrect !';
        // on insert span après le input
        input.insertAdjacentElement('afterend', span);
    }
}

// on sélectionne l'élément input name
let name = document.getElementById('name');
name.addEventListener('blur', function() {
    checkField(name, nameRegex);
});
let age = document.getElementById('age');
age.addEventListener('blur', function() {
    checkField(age, ageRegex);
});
let email = document.getElementById('email');
email.addEventListener('blur', function() {
    checkField(email, emailRegex);
});

/*
correction AMADOU

let nameRegex = /^[A-Z][a-zéèç]+(?:(?:\s|\-)[A-Z][a-zéèç]+)?$/;
let ageRegex = /[0-9]{1,3}$/;
let emailRegex = /^\w+([\.-]\w+)*\@\w+\.[a-z]{2,6}$/;

function checkField(input, regex) {
    let value = input.value;
    // Si le texte renseigné ne match pas avec la regex
    if (!regex.test(value)) {
        // création balise span
        let span = document.createElement('span');
        // ajout d'un attribut class à span
        span.setAttribute('class', 'danger');
        // ajout du texte - contenu de span
        span.textContent = 'La saisie est incorrect !';
        // on insert p après le input
        input.insertAdjacentElement('afterend', span);
    }
}
// On sélectionne l'élémént input name
let name = document.getElementById('name');
name.addEventListener('blur', function () {
    checkField(name, nameRegex);
});

let age = document.getElementById('age');
age.addEventListener('blur', function () {
    checkField(age, ageRegex);
});

let email = document.getElementById('email');
email.addEventListener('blur', function () {
    checkField(email, emailRegex);
});
*/


/*
correction ULYSSE
function verifierA() {
    let regex1 = new RegExp(/^([a-zA-Z éçè]+)$/);

    let valueNom = document.getElementById("nom").value;

    if (regex1.test(valueNom) == false) {
        document.getElementById("errorNom").innerHTML = "Le nom saisie est invalide";
    } else {
        document.getElementById("errorNom").innerHTML = "";
    }
}

function verifierB() {
    let regex2 = new RegExp(/^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i);

    let valueMail = document.getElementById("mail").value;

    if (regex2.test(valueMail) == false) {
        document.getElementById("errorMail").innerHTML = "L'adresse mail saisie est invalide";
    } else {
        document.getElementById("errorMail").innerHTML = "";
    }
}

function verifierC() {
    let regex3 = new RegExp(/^([0-9]{1,3})$/);

    let valueAge = document.getElementById("age").value;

    if (regex3.test(valueAge) == false) {
        document.getElementById("errorAge").innerHTML = "L'age saisie est invalide";
    } else {
        document.getElementById("errorAge").innerHTML = "";
    }
}
*/




/* 

\w = prend tout les caracteres alphanumériques

----------------------------------------

let name = prompt("Votre nom :");
let age = prompt("Votre âge :");
let email = prompt("Votre adresse mail :");

if (nameRegex.test(name)) {
    alert("Nom valide !");
} else {
    alert("Nom non valide !");
}

if (ageRegex.test(age)) {
    alert("Age valide !");
} else {
    alert("Age non valide !");
}

if (emailRegex.test(email)) {
    alert("Adresse mail valide !");
} else {
    alert("Adresse mail non valide !");
}

-----------------------------------------

let nameRegex = /^[A-Z][a-zéèç]+(?:\s[A-Z][a-zéèç]+)?$/;

let name = 'Jean Paul';

// alert(name.match(nameRegex));

alert(nameRegex.test(name));

------------------------------------------

Regex nom et age avec nom composé :

let nameRegex = /^[A-Z][a-zéèç]+(?:(?:\s|\-)[A-Z][a-zéèç]+)?$/;
let ageRegex = /[0-9]{1,3}$/;

Inverser la saisie :

let name = 'Jean Paul'
let testRegex = /^([a-z]+)([a-z ]+)$/i;

if(testRegex.test(name))
    console.log(name.replace(testRegex, '$2 $1'));

    // sortie Paul Jean 

*/