export async function fetchWordData(word) {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Word not found");
    }
    const data = await response.json();
    console.log(data);
    return data[0];
  } catch (error) {
    console.error("Error fetching word data:", error);
    return null;
  }
}
