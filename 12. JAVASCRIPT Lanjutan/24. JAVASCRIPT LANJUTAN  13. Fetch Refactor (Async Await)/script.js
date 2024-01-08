// Fetch
// const searchButton = document.querySelector(".search-button");
// searchButton.addEventListener("click", function () {
//   const inputKeyword = document.querySelector(".input-keyword");
//   fetch("http://www.omdbapi.com?apikey=78c0d1a4&s=" + inputKeyword.value)
//     .then((response) => response.json())
//     .then((response) => {
//       const movies = response.Search;
//       let cards = "";
//       movies.forEach((e) => {
//         cards += showCard(e);
//       });

//       const movieContainer = document.querySelector(".movie-container");
//       movieContainer.innerHTML = cards;

//       // ketika tombol di klik
//       const mdButton = document.querySelectorAll(".modal-detail-button");
//       mdButton.forEach((btn) => {
//         btn.addEventListener("click", function () {
//           const dbS = this.dataset.imdbid;
//           fetch("http://www.omdbapi.com?apikey=78c0d1a4&i=" + dbS)
//             .then((response) => response.json())
//             .then((r) => {
//               const movieModal = showMovieDetail(r);
//               const movieContainer = document.querySelector(".modal-body");
//               movieContainer.innerHTML = movieModal;
//             });
//         });
//       });
//     });
// });

// Refactoring (membenarkan codingan atau mrapihkan codingan)
const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", async function () {
  const inputKeyword = document.querySelector(".input-keyword");
  const movies = await getMovies(inputKeyword.value);
  updateUI(movies);
});

// event binding
document.addEventListener("click", async function (e) {
  if (e.target.classList.contains("modal-detail-button")) {
    const imdbid = e.target.dataset.imdbid;
    const movieDetail = await getMovieDetail(imdbid);
    updateUIDetail(movieDetail);
  }
});

function getMovieDetail(imdbid) {
  return fetch("http://www.omdbapi.com?apikey=78c0d1a4&i=" + imdbid)
    .then((response) => response.json())
    .then((r) => r);
}

function updateUIDetail(m) {
  const movieModal = showMovieDetail(m);
  const movieContainer = document.querySelector(".modal-body");
  movieContainer.innerHTML = movieModal;
}

function getMovies(keyword) {
  return fetch("http://www.omdbapi.com?apikey=78c0d1a4&s=" + keyword)
    .then((response) => response.json())
    .then((response) => response.Search);
}

function updateUI(movies) {
  let cards = "";
  movies.forEach((e) => {
    cards += showCard(e);
  });
  const movieContainer = document.querySelector(".movie-container");
  movieContainer.innerHTML = cards;
}

function showCard(e) {
  return `<div class="col-md-4 my-5">
  <div class="card">
    <img src="${e.Poster}" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-tilte">${e.Title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${e.Year}</h6>
      <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal"
      data-bs-target="#exampleModal" data-imdbid="${e.imdbID}">Show Detail</a>
    </div>
  </div>
</div>`;
}

function showMovieDetail(r) {
  return `<div class="container-fluid">
          <div class="row">
            <div class="col-md-3">
              <img src="${r.Poster}" alt="" class="img-fluid" />
            </div>
            <div class="col-md">
              <ul class="list-group">
                <li class="list-group-item"><h4>${r.Title} (${r.Year})</h4></li>
                <li class="list-group-item">
                  <strong>Director : </strong>
                ${r.Director}</li>
                <li class="list-group-item"><strong>Actor : </strong>${r.Actors}</li>
                <li class="list-group-item"><strong>Writer : </strong>${r.Writer}</li>
                <li class="list-group-item">
                  <strong>Plot : </strong> <br />
                  ${r.Plot}
                </li>
              </ul>
            </div>
          </div>
        </div>`;
}
