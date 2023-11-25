import { cardsData } from "./cardsData.js";

const moreCardsContainer = document.querySelector('#more-cards-contents');

cardsData.forEach(cards => {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('more-card-contents');

    cardContainer.innerHTML = `
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
    `;

    moreCardsContainer.appendChild(cardContainer);
}); 

console.log("ta funcionando patrão");
