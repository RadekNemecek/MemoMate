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


// --------------------------------------------
//                  HLAVNI KOD
// --------------------------------------------

// najit rodice, do kterého budu pridavat HTML
const cardContainer = document.querySelector('ul');




