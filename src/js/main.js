import { cardsData } from "./data/cardsData.js";

const moreCardsContainer = document.querySelector('#more-cards-contents');
const radio = document.querySelector('.manual-button');
let i = 1;

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
            <div class="more-card-details">
                <h4>
                    <i class="fa-solid fa-location-dot"></i>
                    ${cards.localityRoad}
                </h4>
                <p>
                    ${cards.localityDistrict}
                </p>
            </div>
        </div>
    `;

    moreCardsContainer.appendChild(cardContainer);
}); 

console.log("ta funcionando patrão");

/* Carousel Contents */

document.getElementById('button-1').checked = true

setInterval(() => {
    nextImg()
}, 5000)

function nextImg() {
    i++

    if (i > 3) {
        i = 1
    }

    document.getElementById('radio'+i).checked = true
}

document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 1;
    const totalSlides = 3;

    function showSlide(index) {
        document.getElementById(`button-${currentIndex}`).checked = false;
        currentIndex = (index + totalSlides) % totalSlides + 1;
        document.getElementById(`button-${currentIndex}`).checked = true;
    }

    function nextSlide() {
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 10000); 
});