// vytvoreni nove karty
function createNewCard(){
    // vyptej si nadpis a text
    let title = String(prompt('Zadej nadpis'));
    let content = String(prompt('Zadej text'));

    // kontrola, jestli je zadan nadpis, pokud ne, dopln text
    if (!title){
       title = 'Poznámka'
    };

    // vytvorit novy HTML element (li)
    let newCard = document.createElement('li');

    //vytvor obsah do karty
    newCard.innerHTML = `
    <header class="controls">
        <div class="cont-left">
            18.10.2024
        </div>
        <div class="cont-center">

        </div>
        <div class="cont-right">
            <button class="done"></button>
        </div>
    </header>                                                   
        <h3>${title}</h3>
        <p>
            ${content}
        </p>
    `;

    // vlozit novy element do rodice
    cardContainer.appendChild(newCard);

}

// vytvoreni nove karty pomocí input pole
function createNewCardByInput(title, content){
    
    // vytvorit novy HTML element (li)
    let newCard = document.createElement('li');
    
    //vytvor obsah do karty
    newCard.innerHTML = `
    <header class="controls">
    <div class="cont-left">
    18.10.2024
    </div>
    <div class="cont-center">
    
    </div>
    <div class="cont-right">
    <button class="done"></button>
    </div>
    </header>                                                   
        <h3>${title}</h3>
        <p>
            ${content}
        </p>
    `;

    // vlozit novy element do rodice
    cardContainer.appendChild(newCard);
}




// --------------------------------------------
//               Prostor pro testy
// --------------------------------------------

// Ziskani prvku z HTML
const onTopWindow = document.getElementById('myOnTopWindow');
const openWindowBtn = document.getElementById('openMyOnTopWindow');
const closeWindowBtn = document.getElementsByClassName('close')[0];
const submitTextBtn = document.getElementById('submitText');
let userTextValue = ''; //později bude obsahovat zadaný text uživatele
 
// Otevrit okno po kliknuti na button
openWindowBtn.onclick = function(){
    onTopWindow.style.display = 'block';
    }

// Zavreni okna po kliknuti na "x"
closeWindowBtn.onclick = function(){
    onTopWindow.style.display = 'none';
}

// Zavreni okna pri kliknuti mimo obsah
window.onclick = function(event) {
    if (event.target == onTopWindow){
        onTopWindow.style.display = 'none';
    }
}

// zpracovani textu 
submitTextBtn.onclick = function(){
    const userText = document.getElementById('userText').value;
    userTextValue = userText;

    console.log('text od uživatele', userTextValue);

    document.getElementById("userText").value = ""; //promaže pole input
    onTopWindow.style.display = 'none';
}



// --------------------------------------------
//                  HLAVNI KOD
// --------------------------------------------

// najit rodice, do kterého budu pridavat HTML
const cardContainer = document.querySelector('.cards ul');


// --------------------------------------------
//        waiting to delete :) 
// --------------------------------------------

/* // uložení hodnot z inputu
document.getElementById("inputTitle").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Zabrání zalomení řádku
        let title = document.getElementById("inputTitle").value;
        document.getElementById("inputTitle").value = ""; //promaže pole input
        console.log("Hodnota inputu:", title);
        let content = ("tady je delší text"); //docasna promena, pozdeji ziskat z funkce
        createNewCardByInput(title, content);
    }

}); */