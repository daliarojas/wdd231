const hamburgerBtn = document.getElementById("hamburger-btn");
        const navList = document.getElementById("nav-list");

        hamburgerBtn.addEventListener("click", () => {
            navList.classList.toggle("open");
        });

ocument.addEventListener('DOMContentLoaded', () => {
    const businessListContainer = document.getElementById('business-list');

    // Function to create a business card element
    const createBusinessCard = (business) => {
        const card = document.createElement('div');
        card.className = 'business-card';

        card.innerHTML = `
            <img src="${business.logoUrl}" alt="Logo for ${business.name}" class="business-logo">
            <h3 class="business-name">${business.name}</h3>
            <p class="business-category">${business.category}</p>
            <a href="${business.websiteUrl}" class="business-link" target="_blank" rel="noopener noreferrer">Visit Website</a>
        `;
        return card;
    };

    // Fetch the JSON data
    fetch('featured_businesses.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Clear any static/placeholder content
            businessListContainer.innerHTML = ''; 
            
            // Loop through data and append cards
            data.forEach(business => {
                businessListContainer.appendChild(createBusinessCard(business));
            });
        })
        .catch(error => {
            console.error('Could not fetch featured businesses:', error);
            // Optional: Keep the static example card if fetch fails
        });
});

        