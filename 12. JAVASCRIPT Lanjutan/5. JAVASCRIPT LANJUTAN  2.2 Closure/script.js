

// function SelamatD(nama) {
//     return function () {
//         return `halo ${nama} semuanya`;
//     }
// }

// let nama = SelamatD('Keyla');
// console.log(nama());



// CONTOH
// function init() {
//     let nama = 'Keyla'; // local variable
//     function tampilNama() { // inner function (closure)
//         console.log(nama); // akses ke parent variabel
//     }
//     tampilNama();
// }
// init();


// LETS CODE!!
// function init() {
//     // let nama = 'Keyla';
//     return function (nama) {
//         console.log(nama);
//     }
// }
// let panggilNama = init();
// panggilNama('Icawkwkwk');
// panggilNama('Lala');
// panggilNama('uhutt');








// CONTOH MEMBUAT FUNCTION FACTORIES
// function ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log(`halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan`);
//     }
// }
// let Malam = ucapkanSalam('Malam');
// let Sore = ucapkanSalam('Sore');

// console.dir(Malam);







// CONTOH MEMBUAT FUNCTION PRIVAT METHOD
let add = (function () {
    let counter = 0;
    return function () {
        return ++counter;
    }
})();

counter = 100;

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());




















