import { cardsData } from "./data/cardsData.js";

const moreCardsContainer = document.querySelector('#more-cards-contents');
const modal = document.querySelector('#card-modal');
const inputBtn = document.querySelector('.card-button');

cardsData.forEach(cards => {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('more-card-contents');

    cardContainer.innerHTML = `
        <div class="foreach-cards">
            <div class="more-card-image">
                <img 
                    src="${cards.photoCard}" 
                    alt="Default Image"    
                >
            </div>

            <div class="more-card-info">
                <h3>${cards.title}</h3>
                <p>${cards.description}</p>
            </div>

            <div class="card-button">
                <a href="">Sobre a empresa</a>
            </div>
        </div>
    `;

    moreCardsContainer.appendChild(cardContainer);
}); 

console.log("ta funcionando patrão");

function openModal() {
    
}


