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