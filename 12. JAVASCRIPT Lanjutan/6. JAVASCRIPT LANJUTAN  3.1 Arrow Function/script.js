// function expression

// let tampilPesan = function (nama) {
//     alert('halo ' + nama);
// }

// tampilPesan('Keyla');



// Arrow function
// let tampilPesan = (nama) => {
//     alert('halo ' + nama);
// }

// tampilPesan('Keyla');




// function Expression
// const tampilNama = function (nama) {
//     return `halo ${nama}`;
// }

// console.log(tampilNama('Sandhika'));



// function arrow
// const tampilNama = (nama) => { return `halo ${nama}`; }
// console.log(tampilNama('Doddy Ferdiansyah'));

// const tampilNama = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama}`;
// }
// console.log(tampilNama('Erik', 'Malam'));



// implisit return
// const tampilNama = nama => `Halo ${nama}`;
// console.log(tampilNama('Doddy Ferdiansyah'));



// const tampilNama = () => 'Hello World!';
// console.log(tampilNama());

let mahasiswa = ['Sandhika Galih', 'Doddy Ferdiansyah', 'Erik'];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

let jumlahHuruf = mahasiswa.map(nama => ({ nama, jmlHuruf: nama.length }));
console.table(jumlahHuruf);




















