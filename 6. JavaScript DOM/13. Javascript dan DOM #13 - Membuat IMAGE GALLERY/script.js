const jumbo = document.querySelector(".jumbo");
const tum = document.querySelectorAll(".tum");
const cn = document.querySelector(".container");

cn.addEventListener("click", function (e) {
  console.log(e.target);
  // cek apakah yang diklik adalah tum
  if (e.target.className == "tum") {
    jumbo.src = e.target.src;
    jumbo.classList.add("fade");
    setTimeout(function () {
      jumbo.classList.remove("fade");
    }, 500);
    tum.forEach(function (tums) {
      // if (tums.classList.contains('aktif')) {
      //     tums.classList.remove('aktif');
      // }
      tums.className = "tum";
    });
    e.target.classList.add("aktif");
  }
});
