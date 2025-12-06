const hamMenu = document.querySelector('ham-menu');

        const offScreenMenu = document.querySelector('.off-screen-menu');

        hamMenu.addEventListener("click", () => {
            hamMenu.classList.toggle('active');
            offScreenMenu.classList.toggle('active');
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

const MEMBERSHIP_DATA = {
    "np": {
        "title": "NP Membership (Non-Profit)",
        "cost": "No Fee",
        "benefits": [
            "Basic directory listing.",
            "Access to member newsletter.",
            "Eligibility for non-profit specific grants (application required)."
        ]
    },
    "bronze": {
        "title": "Bronze Membership",
        "cost": "$150/year",
        "benefits": [
            "All NP benefits.",
            "Preferred directory listing.",
            "10% discount on standard Chamber events.",
            "Access to monthly member training webinars."
        ]
    },
    "silver": {
        "title": "Silver Membership",
        "cost": "$300/year",
        "benefits": [
            "All Bronze benefits.",
            "Feature listing in directory.",
            "25% discount on all Chamber events.",
            "One free ad placement in the newsletter per year."
        ]
    },
    "gold": {
        "title": "Gold Membership",
        "cost": "$600/year",
        "benefits": [
            "All Silver benefits.",
            "Premier listing and priority referrals.",
            "50% discount on all Chamber events and training.",
            "Guaranteed spotlight advertising position on the Chamber home page (Quarterly rotation)."
        ]
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // 1. Set the Hidden Timestamp Field
    const timestampField = document.getElementById('timestamp');
    if (timestampField) {
        // Use ISO string for accurate submission time
        timestampField.value = new Date().toISOString(); 
    }

    // 2. Initial Card Animation
    const cards = document.querySelectorAll('.membership-card');
    cards.forEach(card => {
        // Use requestAnimationFrame or setTimeout to ensure transition runs after DOM paint
        setTimeout(() => {
            card.classList.add('loaded');
        }, 10);
    });

    // 3. Modal Functionality
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalBenefits = document.getElementById('modal-benefits');
    const modalTriggers = document.querySelectorAll('.modal-trigger');

    modalTriggers.forEach(button => {
        button.addEventListener('click', function() {
            const level = this.getAttribute('data-level');
            const data = MEMBERSHIP_DATA[level];
            
            if (data) {
                // Update modal content
                modalTitle.textContent = `${data.title} (${data.cost})`;
                
                modalBenefits.innerHTML = '';
                data.benefits.forEach(benefit => {
                    const li = document.createElement('li');
                    li.textContent = benefit;
                    modalBenefits.appendChild(li);
                });

                // Show modal
                modal.classList.add('active');
            }
        });
    });

    // Close modal via the 'X' button
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // Close modal if user clicks outside of it
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('active');
        }
    });
});
        