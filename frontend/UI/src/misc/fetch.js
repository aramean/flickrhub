// Reference for the current abort controller
let currentController = null;

const baseUrl = process.env.BASE_URL;

export async function fetchSearchPhotos(searchTerm, page = 1) {

  if (currentController) {
    currentController.abort(); // Abort any ongoing fetch request
  }

  // Create new AbortController for the request
  currentController = new AbortController();
  const signal = currentController.signal;

  const url = baseUrl + 'photo/search?searchText=' + searchTerm + '&page=' + page;

  try {
    const response = await fetch(url, { signal });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error();
  };
}