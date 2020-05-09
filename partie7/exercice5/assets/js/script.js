/*
function getStringLength(string) {
    let stringLength;
    if (string.length === 1) {
        stringLength = `La chaîne contient qu'un seul caractère`;
    } else {
        stringLength = `La chaîne contient ${string.length} caractères`;
    }
    return stringLength;
}
*/


let getStringLength = string => {
    let stringLength = string.length;
    if (string.length === 1) {
        stringLength = `La chaîne contient qu'un seul caractère`;
    } else {
        stringLength = `La chaîne contient ${string.length} caractères`;
    }
    return stringLength;
}

console.log(getStringLength(`Bonjour tout le monde !`));