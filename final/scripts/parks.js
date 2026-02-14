const container = document.querySelector('#parks-container');

async function fetchParks() {
  try {
    const response = await fetch('data/parks.json');
    const parks = await response.json();
    displayParks(parks);
  } catch (error) {
    console.error('Error loading parks:', error);
  }
}

function displayParks(parks) {
  container.innerHTML = parks.map(park => `
    <article class="park-card">
      <h3>${park.name}</h3>
      <p><strong>State:</strong> ${park.state}</p>
      <p>${park.description}</p>
      <p><strong>Activities:</strong> ${park.activities.join(', ')}</p>
      <button>View Details</button>
    </article>
  `).join('');
}

fetchParks();