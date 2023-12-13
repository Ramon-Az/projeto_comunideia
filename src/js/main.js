import { cardsData } from "./data/cardsData.js";

const moreCardsContainer = document.querySelector('#more-cards-contents');
const loadCard = document.querySelector('#load-cards');
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

/* ================ MODAL CARD ================ */

function createModal(card) {
    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modal-container');

    modalContainer.innerHTML = `
        <div class="modal-content">
            <div class="modal-card">
                <div class="modal-card-image">
                    <img src="${card.photoCard}" alt="${card.title}">
                </div>
                <div class="modal-card-info">
                    <h1>${card.title}</h1>
                    <p>${card.description}</p>
                    <div class="modal-card-details">
                        
                        <div class="modal-card-more-details">
                            <div class="modal-card-time">
                                <i class="fa-regular fa-clock"></i>
                                <p>${card.openingTime}</p>
                                <p>${card.openingHours}</p>
                            </div>
                            
                            <div class="modal-card-phone">
                                <i class="fa-solid fa-phone"></i>
                                <p>${card.phone}</p>
                            </div>
                            
                            <div class="modal-card-site">
                                <i class="fa-solid fa-earth-americas"></i>
                                <a src="${card.site}">
                                    ${card.site}
                                </a>
                            </div>
                        </div>
                        
                        <div class="modal-card-locality">
                            <h4>
                                <i class="fa-solid fa-location-dot"></i>
                                ${card.localityRoad}
                            </h4>
                            <p>${card.localityDistrict}</p>
                        </div>
                    </div>
                    
                    <div class="modal-card-socials">
                        <ul>
                            <li>
                                <i class="fa-brands fa-instagram"></i>
                            </li>
                            
                            <li>
                                <i class="fa-brands fa-facebook"></i>
                            </li>
                            
                            <li>
                                <i class="fa-brands fa-twitter"></i>
                            </li>
                            
                            <li>
                                <i class="fa-brands fa-linkedin-in"></i>
                            </li>
                        </ul>
                    </div>
                    
                </div>

            </div>
        </div>
    `;

    document.body.appendChild(modalContainer);
}

function openModal(card) {
    createModal(card);
    const modal = document.querySelector('.modal-container');
    modal.style.display = 'block';

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
}

const forEachCardsModal = document.querySelectorAll('.foreach-cards');
forEachCardsModal.forEach((cardModal, index) => {
    cardModal.addEventListener('click', () => {
        openModal(cardsData[index]);
    });
});


function closeModal() {
    const modal = document.querySelector('.modal-container');
    modal.parentNode.removeChild(modal);
}


/* ================ BUTTON VER MAIS ================ */

loadCard.addEventListener('click', () => {
    if (cardsData) {

    }
});

/* ================ CAROUSEL CONTENTS ================ */

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
