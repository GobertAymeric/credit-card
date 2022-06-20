document.addEventListener("DOMContentLoaded", function(){

    let flip = document.getElementById('flip');
    let crypto = document.getElementById('crypto');
    let cryptogramme = document.getElementById('cryptogramme');
    let contenu_1 = document.getElementById('numbercard');
    let card = document.getElementById('numb-card');
    let name_card = document.getElementById('name');
    let contenu_2 = document.getElementById('namecard');
    let expiration = document.getElementById('date');
    let contenu_3 = document.getElementById('datecard');

    crypto.onfocus = function(){
        flip.style.transform = "rotateY(180deg)";
    }
    crypto.onblur = function(){
        flip.style.transform = "rotateY(0deg)"
    }
    card.addEventListener('keyup', function(){
        cardnumber.innerHTML = card.value;
        if(card.value.length === 0){
            cardnumber.innerHTML = '&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;';
        }
        if (card.value.length === 4 || card.value.length === 9 || card.value.length === 14){
            card.value += " ";
            
        }
    })
    name_card.addEventListener('keyup', function(){
        contenu_2.innerHTML = name_card.value;
        if (name_card.value.length === 0){
            contenu_2.innerHTML = 'FULL NAME';
        }
    })
    expiration.addEventListener('keyup', function(){
        contenu_3.innerHTML = expiration.value;
        if (expiration.value.length === 0){
            contenu_3.innerHTML = 'MM/YY';
        }
        if(expiration.value.length === 2){
            expiration.value += "/";
        }
    })
    crypto.addEventListener('keyup', function(){
        cryptogramme.innerHTML = crypto.value;
        if (crypto.value.length === 0){
            cryptogramme.innerHTML = "&bull;&bull;&bull;";
        }
    })
})