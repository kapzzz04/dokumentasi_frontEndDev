// window.setTimeout()
// window.setInterval()

// const tes = setTimeout(function () {
//     console.log('ok');
// }, 5000);

// const tombol = document.getElementById('tombol');
// tombol.addEventListener('click', function () {
//     clearTimeout(tes);
//     console.log('selesai');
// });

// setInterval()
// const tes = setInterval(function () {
//     console.log('ok');
// }, 2000);

// const tombol = document.getElementById('tombol');
// tombol.addEventListener('click', function () {
//     clearInterval(tes);
//     console.log('selesai');
// });

// Program Hitung mundur
const tanggalTujuan = new Date("May 21, 2023 21:04:00").getTime();
// const sekarang = new Date().getTime();
// const selisih = tanggalTujuan - sekarang;

// const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
// const jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
// const menit = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60));
// const detik = Math.floor(selisih % (1000 * 60) / 1000);

// const time = document.getElementById('teks');

// if (hari == 0) {
//     time.innerHTML = 'Waktu anda tersisa ' + jam + ':' + menit + ':' + detik;
// } else {
//     time.innerHTML = 'Waktu anda tersisa ' + hari + 'hari ' + jam + ':' + menit + ':' + detik;
// }

const hitungMundur = setInterval(function () {
  const sekarang = new Date().getTime();
  const selisih = tanggalTujuan - sekarang;

  const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
  const jam = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
  const detik = Math.floor((selisih % (1000 * 60)) / 1000);

  console.log(`${hari} : ${jam} : ${menit} : ${detik}`);
  const time = document.getElementById("teks");

  if (selisih < 0) {
    clearInterval(hitungMundur);
    time.innerHTML = "waktu sudah habis";
  } else if (hari == 0) {
    time.innerHTML = "Waktu anda tersisa " + jam + ":" + menit + ":" + detik;
  } else {
    time.innerHTML =
      "Waktu anda tersisa " + hari + "hari " + jam + ":" + menit + ":" + detik;
  }
}, 1000);

setInterval(function () {
  console.log("ok");
}, 1909);
