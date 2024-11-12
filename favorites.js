export function getFavorites() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  return favorites;
}

export function saveFavorite(word) {
  const favorites = getFavorites();
  if (!favorites.includes(word)) {
    favorites.push(word);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
}

export function displayFavorites() {
  const favorites = getFavorites();
  const favoritesList = document.getElementById("favoritesList");
  favoritesList.innerHTML = ""; // Clear the current list

  favorites.forEach((word) => {
    const wordItem = document.createElement("div");
    wordItem.classList.add("favorited-word");
    wordItem.innerHTML = `<strong>${word}</strong>`;
    favoritesList.appendChild(wordItem);
  });
}
