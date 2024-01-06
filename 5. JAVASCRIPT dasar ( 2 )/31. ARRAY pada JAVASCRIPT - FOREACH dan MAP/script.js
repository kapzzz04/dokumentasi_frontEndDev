
// 6. Foreach
var angka = [1, 2, 3, 4, 5, 6, 7, 8];
var nama = ['Keyla', 'Galih', 'Nofa', 'Azahra'];

// for (var i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
// }

// angka.forEach(function (e) {
//     console.log(e);
// })

// for (var i = 0; i < nama.length; i++) {
//     console.log('Mahasiswa ke-' + (i + 1) + ' adalah : ' + nama[i]);
// }

// nama.forEach(function (e, i) {
//     console.log('Mahasiswa ke-' + (i + 1) + ' adalah : ' + e)
// })


// 7. Map
// var angka = [1, 2, 5, 3, 6, 8, 4];
// var angka2 = angka.map(function (e) {
//     return e * 2;
// })

// console.log(angka2.join(' - '));


// 8. sort
var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
angka.sort(function (b, a) {
    return a - b;
});
console.log(angka.join(','));

var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
angka.sort((y, x) => y - x);
console.log(angka.join(','));

// jadi ini tuh bisa diurutin dari yg terkecil
// dan dari yang terbesar kalo yg terbesar parameter dan retur nya beda tempat tidak sama gitu deh
// liat di contoh ya







// var siswa = ["Natasha Dewi Yuliana 10 BDPM 1", "Nurul Aliftia 10 RPL 1", "Keyla Azahra Parlani 10 RPL 1", "Muhammad Nadhir Amrulloh 10 RPL 1", "Iik Purnama 10 RPL 2", "Dea Amelia Putri 10 RPL 2", "Aila Sabila 10 RPL 3", "Aulia Ningsih 10 RPL 3", "Intan Adya Sari 10 RPL 3", "Rico Fahmi Aditiya .F 10 RPL 3", "Dewi Sartika 10 RPL 3", "Rara amyati 10 BDPM 1", "Salsa mae 10 BDPM 1", "Alya meliyana putri 10 BDPM 1", "Aldo Arya putra 10 BDPM 2", "Dewi fadilah 10 BDPM 3", "Salwa putri Rahayu 10 BDPM 3", "Syifa Amelia 10 DPIB 2", "Ahmad refaldy 10 TITL 1", "Siti nurlaila 10 TITL 1", "Ervan Doni f 10 TITL 2", "Fathiyatul Umami 10 TBSM 1", "Saghir Ali 10 TBSM 1", "Liandro parien Alberto 10 TBSM 1", "Rhassya utina 10 RPL 2", "Kirana esa fadilla 10 BDPM 1", "Delia Alzahra putri 10 DPIB 2", "Fitri Oktafiani 10 BDPM 1", "Lala Nur fadilah 10 DPIB 2", "Shelia Putri Rahma 10 DPIB 2"];
// siswa.sort();
// siswa.forEach(function (e, i) {
//     console.log((1 + i) + '. ' + e);
// })
// for (var i = 0; i < siswa.length; i++) {
//     console.log((1 + i) + '. ' + siswa[i]);
// }








