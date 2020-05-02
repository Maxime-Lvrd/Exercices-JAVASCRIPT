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
