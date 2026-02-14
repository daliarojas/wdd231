const modal = document.querySelector('#park-modal');
const content = document.querySelector('#modal-content');
const closeBtn = document.querySelector('#close-modal');

export function openModal(park) {
  content.innerHTML = `
    <h2>${park.name}</h2>
    <p>${park.description}</p>
    <p><strong>Activities:</strong> ${park.activities.join(', ')}</p>
  `;
  modal.showModal();
}

closeBtn?.addEventListener('click', () => modal.close());