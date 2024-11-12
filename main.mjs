import { fetchWordData } from "./api.mjs";
import { saveFavorite, displayFavorites } from "./favorites.mjs";

async function displayWord(word) {
  const wordDefinitionSection = document.querySelector("#wordDefinition");

  const synonymsSection = document.querySelector("#synonyms");
  const wordData = await fetchWordData(word);
  if (wordData) {
    wordDefinitionSection.innerHTML = `
      <h3>Definition</h3>
      <p>${wordData.meanings[0].definitions[0].definition}</p>
      <button id="favoriteBtn">Add to Favorites</button>
    `;
    synonymsSection.innerHTML = `
      <h3>Synonyms</h3>
      <p>${wordData.meanings[0].synonyms.join(", ")}</p>
    `;

    // Add event listener for "Add to Favorites"
    document.querySelector("#favoriteBtn").addEventListener("click", () => {
      // Use querySelector
      saveFavorite(word);
      displayFavorites(); // Update favorites list
    });
  } else {
    wordDefinitionSection.innerHTML = `<p>Sorry, the word was not found.</p>`;
    synonymsSection.innerHTML = "";
  }
}

function setupSearch() {
  const searchBtn = document.querySelector("#searchBtn"); // Use querySelector
  const wordInput = document.querySelector("#wordInput"); // Use querySelector

  searchBtn.addEventListener("click", () => {
    const word = wordInput.value.trim().toLowerCase();
    if (word) {
      displayWord(word);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupSearch(); // Set up the search functionality
  displayFavorites(); // Display saved favorites when the page loads
});
