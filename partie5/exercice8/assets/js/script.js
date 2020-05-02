// déclaration fonction clone

function cloneElements(){
    // Afficher l'élément conteneur du bouton qui à déclencher la fonction
    let parent = this.parentNode;
    // Cloner le parent, l'argument true permet de clone les enfants
    let parentClone = parent.cloneNode(true);
    // insertion du clone dans le DOM
    parent.insertAdjacentElement('afterend', parentClone);
}

document.querySelector('button').addEventListener('click', cloneElements);