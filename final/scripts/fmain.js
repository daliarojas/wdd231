const parksData = [
    { id: 'zion', name: "Zion National Park", state: "Utah", description: "Famous for red cliffs and world-class hiking.", activities: ["Hiking", "Climbing", "Photography"] },
    { id: 'yosemite', name: "Yosemite National Park", state: "California", description: "Known for its giant sequoias and iconic granite cliffs.", activities: ["Camping", "Hiking", "Sightseeing"] },
    { id: 'yellowstone', name: "Yellowstone National Park", state: "Wyoming", description: "Home to Old Faithful and incredible geothermal features.", activities: ["Wildlife Viewing", "Geyser Tours", "Camping"] }
];

document.addEventListener("DOMContentLoaded", () => {
    
    const container = document.getElementById('parks-container');
    
    if (container) {
        displayParks(parksData, container);
    }

    
    const modal = document.querySelector('#park-modal');
    const closeBtn = document.querySelector('#close-modal');
    closeBtn?.addEventListener('click', () => modal.close());

   
    const menuButton = document.getElementById("menuButton");
    const navList = document.querySelector("nav ul");
    menuButton?.addEventListener("click", () => navList.classList.toggle("show"));
});

document.addEventListener("DOMContentLoaded", function () {
  const map = L.map('map').setView([39.5, -98.35], 4);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  L.marker([44.6, -110.5]).addTo(map)
    .bindPopup("Yellowstone National Park");
});

setInterval(() => {
    slideIndex++;
    if (slideIndex >= 3) slideIndex = 0;
    currentSlide(slideIndex);
}, 5000); // <--- 5000 milliseconds = 5 seconds

document.addEventListener("DOMContentLoaded", () => {
    let slideIndex = 0;
    const slides = document.getElementsByClassName("testimonial-card");
    const dots = document.getElementsByClassName("dot");

    // Only run if the elements actually exist on this page
    if (slides.length > 0) {
        function showSlides(n) {
            // Reset index if it goes out of bounds
            if (n >= slides.length) slideIndex = 0;
            if (n < 0) slideIndex = slides.length - 1;

            // Hide all slides
            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.remove("active");
                slides[i].style.display = "none"; 
            }

            // Deactivate all dots
            for (let i = 0; i < dots.length; i++) {
                dots[i].classList.remove("active");
            }

            // Show current slide
            slides[slideIndex].style.display = "block";
            slides[slideIndex].classList.add("active");
            dots[slideIndex].classList.add("active");
        }

        // Auto-rotation timer
        const autoSlide = setInterval(() => {
            slideIndex++;
            showSlides(slideIndex);
        }, 5000); 

        // Initialize the first slide
        showSlides(slideIndex);
    }
});