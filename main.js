// reference variables for HTML
const wordSearch = document.querySelector("#search");
const gallery = document.querySelector("#gallery");
const mybutton = document.querySelector("#searchBtn");

const url = `https://api.dictionaryapi.dev/api/v2/entries/en/`;

const fetchWords = async (word) => {
  try {
    const res = await fetch(`${url}${word}`);
    if (!res.ok) {
      throw new Error("Word not found");
    }
    const data = await res.json();
    return data[0];
  } catch (error) {
    console.error("What's this? Definition not found:, ", error);
    return null;
  }
};

// show the word and the definition
const renderWord = (wordData) => {
  return `
        <div class="word-card">
            <h3>${wordData.word}</h3>
            <p><strong>Definition:</strong> ${wordData.meanings[0].definitions[0].definition}</p>
        </div>`;
};

// Function to render words or show an error message
const renderWords = async (word = "") => {
  gallery.innerHTML = "<p>Loading...</p>";

  const wordData = await fetchWords(word);

  if (wordData) {
    gallery.innerHTML = renderWord(wordData);
  } else {
    gallery.innerHTML = "<p>No word found. Try another one!</p>";
  }
};

// Event listener for the search input
// searchInput.addEventListener("input", (e) => {
//   const word = e.target.value.trim();
//   if (word) {
//     renderWords(word);
//   } else {
//     gallery.innerHTML = "<p>Start typing to search for a word...</p>";
//   };

mybutton.addEventListener("click", () => {
  const word = wordSearch.value.trim().replace(/\s+/g, "-");
  if (word) {
    renderWords(word);
  } else {
    gallery.innerHTML = "<p>Please enter a word to search.</p>";
  }
});


