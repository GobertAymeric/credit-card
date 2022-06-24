const num_card = document.getElementById("num_card");
const name_card = document.getElementById("name_card");
const expiration = document.getElementById("expiration");
const contenu1 = document.getElementById("contenu1");
const form = document.getElementById("form");
const card_inner = document.getElementById("card_inner");
const small_containt_2 = document.getElementById("small_containt_2");
const cryptogramme = document.getElementById("cryptogramme");
const flip = document.getElementById('flip');
const crypto = document.getElementById('crypto');

// function verifierCaracteres(event) {
	 		
// 	var keyCode = event.which ? event.which : event.keyCode;
// 	var touche = String.fromCharCode(keyCode);		
// 	var champ = document.getElementById('num_card');	
// 	var caracteres = '0123456789';
			
// 	if(caracteres.indexOf(touche) >= 0) {
// 		champ.value += touche;
// 	}
//     if (num_card.value.length === 4 || num_card.value.length === 9 || num_card.value.length === 14) {
//         num_card.value +=" ";
//     }
// }   

function onlyNumber()
{
    var num_card = document.getElementById('num_card');
    if (num_card.value.match(/[^0-9]/,''));
    {
        num_card.value = num_card.value.replace(/[^0-9]/,' ');
    }
    if (num_card.value.length === 4 || num_card.value.length === 9 || num_card.value.length === 14) {
        num_card.value +=" ";
    }

    var expiration = document.getElementById('expiration');
    if (expiration.value.match(/[^0-9]/));
    {
        expiration.value = expiration.value.replace(/[^0-9]/,'/');
    }
    if (expiration.value.length === 2 ) {
        expiration.value +="/";
    }

    var crypto = document.getElementById('crypto');
    if (crypto.value.match(/[^0-9]/));
    {
        crypto.value = crypto.value.replace(/[^0-9]/,'');
    }
}

crypto.onfocus = function(){
    flip.style.transform = "rotateY(180deg)";
}

crypto.onblur = function(){
    flip.style.transform = "rotateY(0deg)";
}

num_card.addEventListener('input', (e) => {
    
    const value = num_card.value;
    if (num_card.value.length === 0){
    contenu1.innerHTML ='<p>&#8226;&#8226;&#8226;&#8226; &#8226;&#8226;&#8226;&#8226; &#8226;&#8226;&#8226;&#8226; &#8226;&#8226;&#8226;&#8226;</p>';
    }
    if (num_card.value.length === 1 || num_card.value.length === 2 || num_card.value.length === 3 || num_card.value.length === 4 ||
        num_card.value.length === 5 || num_card.value.length === 6 || num_card.value.length === 7 || num_card.value.length === 8 ||
        num_card.value.length === 9 || num_card.value.length === 10 || num_card.value.length === 11 || num_card.value.length === 12 ||
        num_card.value.length === 13 || num_card.value.length === 14 || num_card.value.length === 15 || num_card.value.length === 16 ||
        num_card.value.length === 17 || num_card.value.length === 18 || num_card.value.length === 19 || num_card.value.length === 20 
        ){
        contenu1.innerHTML =`${value}`;
        }
});

name_card.addEventListener('input', (e) => {
    
    const value = name_card.value;
    if (name_card.value.length === 0){
    contenu2.innerHTML ='FULL NAME';
    }
    if (name_card.value.length === 1 || name_card.value.length === 2 || name_card.value.length === 3 || name_card.value.length === 4 ||
        name_card.value.length === 5 || name_card.value.length === 6 || name_card.value.length === 7 || name_card.value.length === 8 ||
        name_card.value.length === 9 || name_card.value.length === 10 || name_card.value.length === 11 || name_card.value.length === 12 ||
        name_card.value.length === 13 || name_card.value.length === 14 || name_card.value.length === 15 || name_card.value.length === 16 ||
        name_card.value.length === 17 || name_card.value.length === 18 || name_card.value.length === 19 || name_card.value.length === 20 
        ){
        contenu2.innerHTML =`${value}`;
        }
});

expiration.addEventListener('input', (e) => {
    
    const value = expiration.value;
    contenu3.textContent =` ${value}`;
    if (expiration.value.length === 0){
        contenu3.innerHTML ='MM/YY';
        }
        if (expiration.value.length === 1 || expiration.value.length === 2 || expiration.value.length === 3 || expiration.value.length === 4 ||
            expiration.value.length === 5  
            ){
            contenu3.innerHTML =`${value}`;
            }
});

crypto.addEventListener('input', (e) => {
    
    const value = crypto.value;
    if (crypto.value.length === 0){
        cryptogramme.innerHTML ='<p>&#8226;&#8226;&#8226;</p>';
        }
        if (crypto.value.length === 1 || crypto.value.length === 2 || crypto.value.length === 3  
            ){
            cryptogramme.innerHTML =`${value}`;
            }
});