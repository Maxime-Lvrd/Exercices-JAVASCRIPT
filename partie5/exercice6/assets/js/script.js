function onFocus() {
    this.style.border = '2px solid';
}

function focusOut() {
    this.style.border = '';
}

let input = document.querySelector('input');

input.addEventListener('focus', onFocus);
input.addEventListener('blur', focusOut);

/*
correction AMADOU (+HTML)
function onFocus(){
    this.style.border = '2px dotted';
}
function focusOut(){
    this.style.border = '';
}

let input = document.querySelector('input');

input.addEventListener('focus', onFocus);
input.addEventListener('blur', focusOut);
*/