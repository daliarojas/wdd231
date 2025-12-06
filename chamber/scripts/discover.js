import { places } from '../data/places.mjs';

const gallery = document.getElementById('gallery');

places.forEach((place, index) => {
    // Create elements
    const card = document.createElement('div');
    const h2 = document.createElement('h2');
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const address = document.createElement('address');
    const p = document.createElement('p');
    const button = document.createElement('button');

    
    h2.textContent = place.name;
    img.src = place.image;
    img.alt = place.alt;
    img.width = 300;
    img.height = 200;
    img.loading = "lazy";
    address.textContent = place.address;
    p.textContent = place.description;
    button.textContent = "Learn More";

    // Append to card
    figure.appendChild(img);
    card.appendChild(h2);
    card.appendChild(figure);
    card.appendChild(address);
    card.appendChild(p);
    card.appendChild(button);

    // Assign a class for CSS Grid Area mapping (card1, card2, etc.)
    card.classList.add(`card${index + 1}`); 
    card.classList.add('discover-card');

    // Append to gallery
    gallery.appendChild(card);
});

const messageArea = document.getElementById('visit-message');
const lastVisit = localStorage.getItem('lastVisit');
const now = Date.now();

if (!lastVisit) {
    // First visit
    messageArea.textContent = "Welcome! Let us know if you have any questions.";
} else {
    // Calculate difference
    const diffTime = now - parseInt(lastVisit);
    const oneDay = 24 * 60 * 60 * 1000;
    
    if (diffTime < oneDay) {
        messageArea.textContent = "Back so soon! Awesome!";
    } else {
        const days = Math.floor(diffTime / oneDay);
        const dayString = days === 1 ? "day" : "days";
        messageArea.textContent = `You last visited ${days} ${dayString} ago.`;
    }
}

localStorage.setItem('lastVisit', now);