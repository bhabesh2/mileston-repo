const API_KEY = "http://www.omdbapi.com/?apikey=92e7f19b&";

const app = document.querySelector(".app");
const searchInput = document.querySelector(".search input");
const searchIcon = document.querySelector(".search img");
const emptyContainer = document.querySelector(".empty");

// Function to fetch and display movies
const searchMovies = async (title) => {
  const movieResponse = await fetch(`${API_KEY}&s=${title}`);
  const data = await movieResponse.json();

  if (data.Search && data.Search.length > 0) {
    emptyContainer.style.display = "none";
    renderMovies(data.Search);
  } else {
    emptyContainer.style.display = "block";
    app.removeChild(document.querySelector(".container"));
  }
};

// Function to render movies on the page
const renderMovies = (movies) => {
  const container = document.createElement("div");
  container.classList.add("container");

  movies.forEach((movie) => {
    const movieCard = createMovieCard(movie);
    container.appendChild(movieCard);
  });

  const oldContainer = document.querySelector(".container");
  if (oldContainer) {
    app.removeChild(oldContainer);
  }

  app.appendChild(container);
};

// Function to create a movie card
const createMovieCard = (movie) => {
  const movieCard = document.createElement("div");
  movieCard.classList.add("movie");

  const movieInfo = document.createElement("div");
  movieInfo.innerHTML = `<p>${movie.Year}</p>`;

  const movieImage = document.createElement("div");
  movieImage.innerHTML = `<img src="${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"}" alt="${movie.Title}" />`;

  const movieDetails = document.createElement("div");
  movieDetails.innerHTML = `
    <span>${movie.Type}</span>
    <h3>${movie.Title}</h3>
  `;

  movieCard.appendChild(movieInfo);
  movieCard.appendChild(movieImage);
  movieCard.appendChild(movieDetails);

  return movieCard;
};

// Event listener for search icon click
searchIcon.addEventListener("click", () => {
  const title = searchInput.value.trim();
  if (title !== "") {
    searchMovies(title);
  }
});

// Event listener for Enter key press in search input
searchInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    const title = searchInput.value.trim();
    if (title !== "") {
      searchMovies(title);
    }
  }
});

// Initial search
searchMovies("Batman");
