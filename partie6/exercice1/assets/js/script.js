/*
for(i=1; i<= 10; i++){
    console.log(i);
}

let i = 1;
while(i <= 5){
    console.log(i);
    i++;
}

do{
    console.log(i);
    i++
}while(i <= 5);
*/


let tbody = document.querySelector('tbody');

for(year = 2020; year <= 2030; year++) {
    console.log(year);
    // on crée une ligne
    let tr = document.createElement('tr');
    // on crée une cellule
    let td = document.createElement('td');
    // insère la date dans la cellule
    td.textContent = year;
    // recherche année bissextile (! = n'est pas)
    if((year % 400 == 0) || ((year % 4 == 0) && !(year % 100 == 0))) {
        td.style.color = 'red';
        td.style.backgroundColor = 'white';
        td.style.fontWeight = 'bold';
    }
    // insère la cellule dans une ligne
    tr.appendChild(td);
    // insère la ligne dans le tableau
    tbody.appendChild(tr);
}