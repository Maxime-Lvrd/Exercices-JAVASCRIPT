var cleave = new Cleave('.orderdate', {
    date: true,
    delimiter: '-',
    datePattern: ['d', 'm', 'Y']
});

var cleave = new Cleave('.phonenumber', {
    phone: true,
    phoneRegionCode: 'FR'
});


var cleave = new Cleave('.bankcard', {
    creditCard: true,
    onCreditCardTypeChanged: function (type) {
        typeOfCard(type);
    }
});

// correction
function typeOfCard(type) {
    document.querySelectorAll('.fab').forEach(function (icon) {
        icon.classList.remove('active');
        if (icon.classList.contains(`fa-cc-${type}`)) {
            icon.classList.add('active');
        }
    });
}



/*

correction BRIAN

function typeOfCard (type){
    
    document.querySelectorAll('.fab').forEach(function(icon){
        icon.classList.remove('active');
        if (icon.classList.contains('fa-cc-'+type)) 
        {
            icon.classList.add('active');
        }
    });
}


typeOfCard(type);

OU

var cleave = new Cleave('.card', {
    creditCard: true,
    onCreditCardTypeChanged: function (type) {
        console.log(type);
        // if (type == 'visa') 
        // {
        //     document.querySelector('.fa-cc-visa').classList.add('active')
        // }else 
        // {
        //     document.querySelector('.fa-cc-visa').classList.remove('active')
        // }
        // if (type == 'mastercard') 
        // {
        //     document.querySelector('.fa-cc-mastercard').classList.add('active')
        // }else 
        // {
        //     document.querySelector('.fa-cc-mastercard').classList.remove('active')
        // }
        // if (type == 'amex') 
        // {
        //     document.querySelector('.fa-cc-amex').classList.add('active')
        // }else 
        // {
        //     document.querySelector('.fa-cc-amex').classList.remove('active')
        // }
        // if (type == 'jcb') 
        // {
        //     document.querySelector('.fa-cc-jcb').classList.add('active')
        // }else 
        // {
        //     document.querySelector('.fa-cc-jcb').classList.remove('active')
        // }
        // if (type == 'discover') 
        // {
        //     document.querySelector('.fa-cc-discover').classList.add('active')
        // }else 
        // {
        //     document.querySelector('.fa-cc-discover').classList.remove('active')
        // }
        // if (type == 'diners') 
        // {
        //     document.querySelector('.fa-cc-diners-club').classList.add('active')
        // }else 
        // {
        //     document.querySelector('.fa-cc-diners-club').classList.remove('active')
        // }
        typeOfCard(type);
    }
});

*/

/*

correction AMADOU boutons/couleur/font

let buttonsList = document.querySelectorAll('button');

buttonsList.forEach(function (button) {
    // DOM 2
    button.addEventListener('click', ModifyTextColor);
    button.addEventListener('click', ModifyTextStyle);

    // DOM 1

    // button.onclick = ModifyTextStyle;
    // button.onmouseover = ModifyTextColor;
})

function ModifyTextColor(e) {
    document.querySelector('p').style.color = e.target.dataset.color;
}

function ModifyTextStyle (e) {
    if(e.target.dataset.font === 'bold'){
        document.querySelector('p').style.fontWeight = e.target.dataset.font;
    }else{
        document.querySelector('p').style.fontStyle = e.target.dataset.font;
    }
}


*/