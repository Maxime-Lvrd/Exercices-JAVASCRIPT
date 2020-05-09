window.addEventListener('scroll', function(){

    let allPara = document.querySelectorAll('p');

    allPara.forEach(function(para){
        if(para.getBoundingClientRect().top <= 0){
            para.style.opacity = 1;
        }
    })
});

/*

correction AMADOU

let allPara = document.querySelectorAll('p');

window.addEventListener('load', function(){
    allPara.forEach(function(para){
        para.classList.add('hidden');
        // On appele fadein pour afficher les p déjà postionnés dans la partie visible de la page

        fadein();
    })
});

// Vérifier si élément dans partie visible page

function inFrontPage(para){
    // Renvoie la hauteur de la fenêtre
    let windowH = window.innerHeight;

    // Ecart entre le haut de mon bloc et le bord sup gauche de la fenêtre

    let paraPos = para.getBoundingClientRect().top;
    // vérifier que l'élément est dans la partie visible de la page
    return paraPos - windowH <= 0;
}

function fadein(){
    for(para of allPara){
        if(inFrontPage(para)){
            para.className = para.className.replace('hidden', 'fadein');
        }else{
            para.className = para.className.replace('fadein', 'hidden'); 
        }
    }
}

// Animation

window.addEventListener('scroll', fadein);


*/