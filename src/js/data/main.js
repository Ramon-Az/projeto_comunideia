import { cardsData } from "./cardsData.js";

const cardsSection = document.querySelector('#more-cards');
const moreCards = document.querySelector('#more-cards-contents');

cardsData.forEach(cards => {
    moreCards.innerHTML = `
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

    moreCards.appendChild(cardsSection);
}); 

console.log("ta funcionando patrão");
