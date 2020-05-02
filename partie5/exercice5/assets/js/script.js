function changeColor(newColor) {
    document.getElementById('text').style.color = newColor;
    document.getElementById('text').style.fontStyle = "";
    document.getElementById('text').style.fontWeight = "";
}

function changeWeight(bold) {
    document.getElementById('text').style.fontWeight = bold;
    document.getElementById('text').style.color = "";
    document.getElementById('text').style.fontStyle = "";
}

function changeStyle(italic) {
    document.getElementById('text').style.fontStyle = italic;
    document.getElementById('text').style.color = "";
    document.getElementById('text').style.fontWeight = "";
}

/* 

correction bonus AMADOU (+HTML)
function changeColor(){
    let color = this.id;
    document.querySelector('p').style.color = color;
}
// fonction permettant de change le style du texte
function changeFont(){
    // on recupère l'id de l'élément déclencheur de la fonction
    let changeType = this.id;
    // On test le type de modif à faire sur le texte
    if(changeType == 'bold'){
        document.querySelector('p').style.fontWeight = changeType;
    }else{
        document.querySelector('p').style.fontStyle = changeType;
    }
}
// renvoie un table contenant les bouton ayant l'id color
let buttonsColorList = document.querySelectorAll('.color');
buttonsColorList.forEach(function(button){
    button.addEventListener('click', changeColor);
});

// renvoie un table contenant les bouton ayant l'id font
let buttonsStyleList = document.querySelectorAll('.font');
buttonsStyleList.forEach(function(button){
    button.addEventListener('click', changeFont);
});

----------------------------------

correction AMADOU (+HTML)
// utilisation de l'interface Event pour écouter la propagation d'un évènement dans le DOM
document.querySelector('body').addEventListener('click', function(e){
    let button = e.target;
})

---------------------------------

correction BRIAN
var btn = document.querySelectorAll('button')
    var txt = document.querySelector('p');
    
    btn[0].addEventListener('click', updateBtn);
    btn[1].addEventListener('click', updateBtn1);
    btn[2].addEventListener('click', updateBtn2);
    btn[3].addEventListener('click', updateBtn3);
    btn[4].addEventListener('click', updateBtn4);
    
    function updateBtn() 
    {
        if (btn[0].textContent == 'Rose')
        {
            txt.className = "text-rose";
        }
    }
    function updateBtn1() 
    {
        if (btn[1].textContent == 'Bleu')
        {
            txt.className = "text-bleu";
        }
    }
    function updateBtn2() 
    {
        if (btn[2].textContent == 'Violet')
        {
            txt.className = "text-violet";
        }
    }
    function updateBtn3()
     {
        if (btn[3].textContent == 'Gras')
        {
            txt.className = "text-gras";
        }
    }
    function updateBtn4() 
    {
        if (btn[4].textContent == 'Italique')
        {
            txt.className = "text-italique";
        }
    }

--------------------------------

correction ULYSSE (+HTML)
function Rose() {
    document.getElementById("paragraphe").style.fontStyle = "";
    document.getElementById("paragraphe").style.fontWeight = "";

    document.getElementById("paragraphe").style.color = "pink";
}
function Bleu() {
    document.getElementById("paragraphe").style.fontStyle = "";
    document.getElementById("paragraphe").style.fontWeight = "";

    document.getElementById("paragraphe").style.color = "blue";
}

function Violet() {
    document.getElementById("paragraphe").style.fontStyle = "";
    document.getElementById("paragraphe").style.fontWeight = "";

    document.getElementById("paragraphe").style.color = "purple";
}

function Gras() {
    document.getElementById("paragraphe").style.fontStyle = "";
    document.getElementById("paragraphe").style.color = "";

    document.getElementById("paragraphe").style.fontWeight = "bold";
}

function Italique() {
    document.getElementById("paragraphe").style.fontWeight = "";
    document.getElementById("paragraphe").style.color = "";
    
    document.getElementById("paragraphe").style.fontStyle = "italic";
}

*/