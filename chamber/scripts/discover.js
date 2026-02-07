import { places } from "../data/discover.mjs";

console.log("discover.js loaded", places);

const container = document.querySelector("#discover-cards");

places.forEach((place) => {
  const card = document.createElement("article");
  card.classList.add("card");

  card.innerHTML = `
    <h2>${place.name}</h2>
    <img src="${place.image}" alt="${place.name}" loading="lazy">
    <address>${place.address}</address>
    <p>${place.description}</p>
    <button>Learn More</button>
  `;

  container.appendChild(card);
});