const num_card = document.getElementById("num_card");
const name_card = document.getElementById("name_card");
const expiration = document.getElementById("expiration");
const contenu_1 = document.getElementById("contenu_1");
const form = document.getElementById("form");
const card_inner = document.getElementById("card_inner");
const small_containt_2 = document.getElementById("small_containt_2");
const crypto = document.getElementById("crypto");
const flip = document.getElementById('flip');

crypto.onfocus = function(){
    flip.style.transform = "rotateY(180deg)";
}

crypto.onblur = function(){
    flip.style.transform = "rotateY(0deg)";
}

num_card.addEventListener('input', (e) => {
    
    const value = num_card.value;
    if (num_card.value.length === 0){
    contenu_1.innerHTML ='<p>&#8226;&#8226;&#8226;&#8226; &#8226;&#8226;&#8226;&#8226; &#8226;&#8226;&#8226;&#8226; &#8226;&#8226;&#8226;&#8226;</p>';
    }
    if (num_card.value.length === 1 || num_card.value.length === 2 || num_card.value.length === 3 || num_card.value.length === 4 ||
        num_card.value.length === 5 || num_card.value.length === 6 || num_card.value.length === 7 || num_card.value.length === 8 ||
        num_card.value.length === 9 || num_card.value.length === 10 || num_card.value.length === 11 || num_card.value.length === 12 ||
        num_card.value.length === 13 || num_card.value.length === 14 || num_card.value.length === 15 || num_card.value.length === 16 ||
        num_card.value.length === 17 || num_card.value.length === 18 || num_card.value.length === 19 || num_card.value.length === 20 
        ){
        contenu_1.innerHTML =`${value}`;
        }
});

name_card.addEventListener('input', (e) => {
    
    const value = name_card.value;
    if (name_card.value.length === 0){
    contenu_2.innerHTML ='FULL NAME';
    }
    if (name_card.value.length === 1 || name_card.value.length === 2 || name_card.value.length === 3 || name_card.value.length === 4 ||
        name_card.value.length === 5 || name_card.value.length === 6 || name_card.value.length === 7 || name_card.value.length === 8 ||
        name_card.value.length === 9 || name_card.value.length === 10 || name_card.value.length === 11 || name_card.value.length === 12 ||
        name_card.value.length === 13 || name_card.value.length === 14 || name_card.value.length === 15 || name_card.value.length === 16 ||
        name_card.value.length === 17 || name_card.value.length === 18 || name_card.value.length === 19 || name_card.value.length === 20 
        ){
        contenu_2.innerHTML =`${value}`;
        }
});

expiration.addEventListener('input', (e) => {
    
    const value = expiration.value;
    contenu_3.textContent =` ${value}`;
    if (expiration.value.length === 0){
        contenu_3.innerHTML ='MM/YY';
        }
        if (expiration.value.length === 1 || expiration.value.length === 2 || expiration.value.length === 3 || expiration.value.length === 4 ||
            expiration.value.length === 5  
            ){
            contenu3.innerHTML =`${value}`;
            }
});

crypto.addEventListener('input', (e) => {
    
    const value = crypto.value;
    contenu_4.textContent =` ${value}`;
    
});