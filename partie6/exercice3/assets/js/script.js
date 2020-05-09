let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];

/* document.getElementById('array').innerHTML = languages.join(); */

let tbody = document.querySelector('tbody');

for(let i = 0; i < languages.length; i++) {
    console.log(languages[i]);
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.textContent = languages[i];
    tr.appendChild(td);
    tbody.appendChild(tr);
}

/* 

correction HELENE

let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];
let x;

for (x of languages) {
    document.write(x + ' ');
}


correction AMADOU

let length = languages.length;
let div = document.createElement('div');
for(i = 0; i < length; i++){
    let p = document.createElement('p');
    p.textContent = languages[i];
    div.appendChild(p);
}

document.querySelector('body').insertAdjacentElement('afterbegin', div);

correction2 AMADOU

languages.forEach(function(language){
    let p = document.createElement('p');
    p.textContent = language;
    div.appendChild(p);
})

document.querySelector('body').insertAdjacentElement('afterbegin', div);

correction3 AMADOU

languages.map(function(language){
    let p = document.createElement('p');
    p.textContent = language;
    div.appendChild(p);
})

document.querySelector('body').insertAdjacentElement('afterbegin', div);

*/