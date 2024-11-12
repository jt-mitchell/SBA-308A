import { fetchWordData } from "./api.js";

import { saveFavorite, displayFavorites } from "./favorites.js";

document.addEventListener("DOMContentLoaded", () => {
  setupSearch(); // Set up the search functionality
  displayFavorites(); // Display saved favorites when the page loads
});
