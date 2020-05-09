let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];

let tbody = document.querySelector('tbody');

for(let i = 0; i < days.length; i++) {
    console.log(days[i]);
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.textContent = days[i];
    if(i >= 5) {
        td.style.fontWeight = 'bold';
    }
    tr.appendChild(td);
    tbody.appendChild(tr);
}

/*

correction AMADOU

let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];
let div = document.createElement('div');

days.forEach(function(day){
    let p = document.createElement('p');
    p.textContent = day;
    // convertir le texte en majuscule ou miniscule afin de comparer des valeurs identiques
    if(day.toLowerCase() === 'samedi' || day.toLowerCase() === 'dimanche'){
        p.style.fontWeight = 'bold';
    }
    div.appendChild(p);
})

document.querySelector('body').insertAdjacentElement('afterbegin', div);

*/