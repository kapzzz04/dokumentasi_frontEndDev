// function kerjakanTugas(matakuliah, selesai) {
//     console.log(`Mulai mengerjakan tugas ${matakuliah} ...`);
//     selesai();
// }

// function selesai() {
//     alert('Selesai mengerjakan tugas!');
// }

// kerjakanTugas('Pemrograman Web', selesai);





// contoh 2
// setTimeout(function () {
//     console.log('Hello World!');
// }, 1000);



// contoh 3
// const tombol = document.querySelector('.sumbit');
// tombol.addEventListener('click', function () {
//     console.log('tombol ditekan!');
// });




// CONTOH 4
// function ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan`);
//     }
// }

// let selamatMalam = ucapkanSalam('Malam');
// console.dir(selamatMalam('Sandhika'));


// CONTOH ABSTRAKSI
// let total = 0, count = 1;
// while (count <= 10) {
//     total += count;
//     count += 1;
// }
// console.log(total);

// 2
// console.log(sum(range(1, 10)));






// PEROCABAAN YANG SUM DAN RANGE :
// function sum(total) {
//     return function (con, tu) {
//         while (con <= tu) {
//             total += con;
//             con++;
//         }
//         return total;
//     }
// }

// let that = sum(0);
// console.log(that(1, 10));






// YANG LEBIH SIMPEL :
// let that = (function sum() {
//     let total = 0;
//     return function (con, tu) {
//         while (con <= tu) {
//             total += con;
//             con++;
//         }
//         return total;
//     }
// })();
// console.log(that(1, 10));


// LANJUTAN PEROCOBAAN
// let that = function sum(con, tu) {
//     let total = 0;

//     while (con <= tu) {
//         total += con;
//         con++;
//     }
//     return total;

// }
// console.log(that(1, 10));




// BEDA LAGI
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }


// BEDA LAGI 2
// function repeatLog(n) {
//     for (let i = 0; i < n + 1; i++) {
//         console.log(i);
//     }
// }

// repeatLog(1000);


// contoh simpel ALERT nya
// function repeat(n, action) {
//     for (let i = 1; i <= n; i++) {
//         action(i);
//     }
// }

// repeat(10, console.log);
// repeat(3, alert);








