const button = document.querySelector('button');

button.onclick = function () {
    const note = parseInt(prompt("Votre note :"));

        switch (note) {
            case 0:
            case 1:
            case 2:
            case 3:
                alert("Nul !");
                break;
            case 4:
            case 5:
            case 6:
                alert("Moyen !");
                break;
            case 8:
            case 9:
                alert("Bien !");
                break;
            case 10:
                alert("Excellent !");
                break
            default:
                alert("");
        }
    }