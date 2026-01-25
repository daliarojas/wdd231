const spotlightContainer = document.querySelector("#spotlight-container");

async function loadSpotlights() {
  try {
    const response = await fetch("scripts/members.json");
    if (!response.ok) throw new Error("Members fetch failed");

    const data = await response.json();

    // Gold & Silver only
    const qualified = data.filter(member =>
      member.membership === "Gold" || member.membership === "Silver"
    );

    // Randomize
    const shuffled = qualified.sort(() => 0.5 - Math.random());

    // Pick 2 or 3
    const selected = shuffled.slice(0, 3);

    selected.forEach(member => {
      const card = document.createElement("div");
      card.classList.add("spotlight-card");

      card.innerHTML = `
        <h3>${member.name}</h3>
        <img src="${member.logo}" alt="${member.name} logo">
        <p>${member.phone}</p>
        <p>${member.address}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        <p><strong>${member.membership} Member</strong></p>
      `;

      spotlightContainer.appendChild(card);
    });

  } catch (error) {
    console.error(error);
  }
}

loadSpotlights();
