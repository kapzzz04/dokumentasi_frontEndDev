// KONSEP THIS 
// const Mahasiswa = function () {
//     this.nama = 'Sandhika';
//     this.umur = 33;
//     this.sayHello = function () {
//         console.log(`Hallo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     };
// }

// const sandhika = new Mahasiswa();





// Arrow Function
// const Mahasiswa = function () {
//     this.nama = 'Sandhika';
//     this.umur = 33;
//     this.sayHello = () => {
//         console.log(`Hallo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     };
// }

// const sandhika = new Mahasiswa();



// Object Litral
// const mhs1 = {
//     nama: 'Sandhika',
//     umur: '33',
//     sayHello: () => {
//         // console.log(`Hallo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//         console.log(this);
//     }
// }



// arrow function 2
// const Mahasiswa = function () {
//     this.nama = 'Sandhika';
//     this.umur = 33;
//     this.sayHello = () => {
//         console.log(`Hallo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     };

//     setInterval(() => {
//         console.log(this);
//     }, 500);

// }

// const sandhika = new Mahasiswa();








// COntoh real berhubungan dengan html
const box = document.querySelector('.box');
box.addEventListener('click', function () {
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 700);
});




