$(".search-button").on("click", function () {
  $.ajax({
    url:
      "http://www.omdbapi.com?apikey=78c0d1a4&s=" + $(".input-keyword").val(),
    success: (results) => {
      const movies = results.Search;
      let cards = "";
      movies.forEach((e) => {
        cards += showCard(e);
      });
      $(".movie-container").html(cards);

      // ketika tombol detail di-klik
      $(".modal-detail-button").on("click", function (r) {
        $.ajax({
          url:
            "http://www.omdbapi.com?apikey=78c0d1a4&i=" +
            $(this).data("imdbid"),
          success: (r) => {
            console.log(r);
            const movieModal = showMovieDetail(r);
            $(".modal-body").html(movieModal);
          },
          error: (e) => {
            console.log(e.responseText);
          },
        });
      });
    },
    error: (e) => {
      console.log(e.responseText);
    },
  });
});

// $.ajax({
//   url: "http://www.omdbapi.com?apikey=78c0d1a4&s=avengers",
//   success: (results) => {
//     const movies = results.Search;
//     let cards = "";
//     movies.forEach((e) => {
//       cards += showCard(e);
//     });
//     $(".movie-container").html(cards);

//     // ketika tombol detail di-klik
//     $(".modal-detail-button").on("click", function (r) {
//       $.ajax({
//         url:
//           "http://www.omdbapi.com?apikey=78c0d1a4&i=" + $(this).data("imdbid"),
//         success: (r) => {
//           console.log(r);
//           const movieModal = showMovieDetail(r);
//           $(".modal-body").html(movieModal);
//         },
//         error: (e) => {
//           console.log(e.responseText);
//         },
//       });
//     });
//   },
//   error: (e) => {
//     console.log(e.responseText);
//   },
// });

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
