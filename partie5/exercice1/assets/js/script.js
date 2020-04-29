function passCheck(){
    /* Sélection des deux input via leurs id */
    let passInput = document.getElementById('pass');
    let passConfirmInput = document.getElementById('passConfirm');

    /* alert(passInput.value); */

    /* Tester l'égalité des valeurs des deux mots de passe */

    if (passInput.value === passConfirmInput.value) {
        passInput.style.borderColor = 'green';
        passConfirmInput.style.borderColor = 'green';
    } else {
        passInput.style.borderColor = 'red';
        passConfirmInput.style.borderColor = 'red';
    }
}

document.querySelector('button').onclick = passCheck;

/* OU document.querySelector('button').addEventListener('click', passCheck); */