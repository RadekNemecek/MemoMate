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

// vytvoreni nove karty a pripnutí na stranku bez db
function createNewCardByButton(title, content){
    
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
//                  HLAVNI KOD
// --------------------------------------------

// najit rodice, do kterého budu pridavat HTML
const cardContainer = document.querySelector('.cards ul');

// -----------vytvoreni nove karty-------------

// Ziskani prvku z HTML
const onTopWindow = document.getElementById('myOnTopWindow');
const openWindowBtn = document.getElementById('openMyOnTopWindow');
// const closeWindowBtn = document.getElementsByClassName('close')[0];
const submitTextBtn = document.getElementById('submitText');
let content = ''; //později bude obsahovat zadaný text uživatele
let title = ''; //později bude obsahovat zadaný text uživatele
 
// Otevrit okno po kliknuti na button
openWindowBtn.onclick = function(){
    onTopWindow.style.display = 'block';

    document.getElementById('userTitle').focus(); //přenese kurzor do Title
    }

// Zavreni okna pri kliknuti mimo obsah
window.onclick = function(event) {
    if (event.target == onTopWindow){
        onTopWindow.style.display = 'none';
    }
}

// zpracovani textu 
submitTextBtn.onclick = function(){

    // ziskani textu z nadpisu (title)
    const userTitle = document.getElementById('userTitle').value;
    title = userTitle;
    
    // ziskani textu z textového pole (content)
    const userText = document.getElementById('userText').value;
    content = userText.replace(/\n/g, "<br>"); //zachová formátoní textu s enterem

    // kontrola, jestli je zadan nadpis, pokud ne, dopln text
    if (!title){
        title = 'Poznámka'
     };

    document.getElementById("userTitle").value = ""; //promaže pole title
    document.getElementById("userText").value = ""; //promaže pole content
    onTopWindow.style.display = 'none'; //skryje onTopWindow

    createNewCardByButton(title, content);
}

// --------nacteni dat z data.json a zobrazeni -------------
fetch('./script/data.json')
    .then(response => response.json())
    .then(data => {
       data.forEach(card => {
        createNewCardByButton(card.title, card.content)
       });
    });

// -------------uprava css pomoci prepinace-------------------
const switcher = document.getElementById('themeSwitcher');

// Načtení stavu z localStorage při načtení stránky
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
    switcher.checked = true; // Nastaví přepínač jako zaškrtnutý
}

// Přidání event listeneru pro změnu přepínače
switcher.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('dark-mode', 'enabled'); // Uloží stav do localStorage
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('dark-mode', 'disabled'); // Uloží stav do localStorage
    }
});


// --------------------------------------------
//               Prostor pro testy
// --------------------------------------------



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

// Zavreni okna po kliknuti na "x"
// closeWindowBtn.onclick = function(){
//     onTopWindow.style.display = 'none';
// }
