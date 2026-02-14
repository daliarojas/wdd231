export function saveFavorite(park) {
  localStorage.setItem('favoritePark', JSON.stringify(park));
  alert(`${park.name} saved to favorites!`);
}