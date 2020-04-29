function passCheck(){
    // Sélection des deux input via leurs id
    let passInput = document.getElementById('pass');
    let passConfirmInput = document.getElementById('passConfirm');

    // tester l'égalité des valeurs des deux mots de passe

    if (passInput.value === passConfirmInput.value) {
        passInput.setAttribute('class', 'input-success');        
        passConfirmInput.setAttribute('class', 'input-success');        
    } else {
        passInput.setAttribute('class', 'input-danger');     
        passConfirmInput.setAttribute('class', 'input-danger');               
    }
}

document.querySelector('button').onclick = passCheck;

/* document.querySelector('button').addEventListener('click', passCheck); */