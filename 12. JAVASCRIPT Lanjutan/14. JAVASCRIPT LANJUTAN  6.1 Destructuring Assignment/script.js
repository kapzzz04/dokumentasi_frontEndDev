// Array
// const coba = ['satu', 'dua', 'tiga'];

// const [a, b, c] = coba;
// console.log(a); //"satu"
// console.log(b); //"dua"
// console.log(c); //"tiga"



// object
// const mhs = {
//     nama: 'Sandhika Galih',
//     umur: 33,
//     email: 'sandhikagalih@unpas.ac.id'
// };

// // kalo tidak pakai Destructuring Assignment
// // const nama = mhs.nama;
// // const umur = mhs.umur;
// // const email = mhs.email;

// // Menggunakan Destructuring Assignment
// const { nama, umur, email } = mhs;

// console.log(nama);  // "Sandhika Galih"
// console.log(umur); // 33
// console.log(email);  // "sandhikagalih@unpas.ac.id"



// Destructuring Variable / Assignment

// Destructuring Variable bagian array
// const perkenalan = ['Halo', 'nama', 'saya', 'Sandhika Galih'];
// // const [salam, satu, dua, nama] = perkenalan;

// // Skipping items / Menskip elemen nya
// const [salam, , , nama] = perkenalan;
// console.log(nama);


// Swap itms
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);

// [a, b] = [b, a];
// console.log(a);
// console.log(b);



// return value pada function
// function coba() {
//     return [1, 2];
// }

// const [a, b] = coba();
// console.log(a);



// Rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5, 6, 7];
// console.log(a);
// console.log(values);





// Destructuring Variable bagian oBJECT
// const mhs = {
//     nama: 'Sandhika Galih',
//     umur: 33
// };

// const { nama, umur } = mhs;



// Assignment tanpa declaration object
// ({ nama, umur } = {
//     nama: 'Sandhika Galih',
//     umur: 33
// });
// console.log(nama);



// Assign ke variable baru
// const mhs = {
//     nama: 'Sandhika Galih',
//     umur: 33
// };

// const { nama: n, umur: u } = mhs;
// console.log(u);



// Memberikan Default Value
// const mhs = {
//     nama: 'Sandhika Galih',
//     umur: 33,
//     email: 'sandhikagalih@unpas.ac.id'
// };

// const { nama, umur, email = 'email@default.com' } = mhs;
// console.log(email);


// Memberi nilai default + assign ke variable baru
// const mhs = {
//     nama: 'Sandhika Galih',
//     umur: 33,
//     email: 'sandhikagalih@unpas.ac.id'
// };

// const { nama: n, umur: u, email: e = 'email@default.com' } = mhs;
// console.log(e);


//  Rest Parameter Object
// const mhs = {
//     nama: 'Sandhika Galih',
//     umur: 33,
//     email: 'sandhikagalih@unpas.ac.id'
// };

// const { nama, ...value } = mhs;
// console.log(value);


// Mengambil filed pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
    id: 123,
    nama: 'Sandhika Galih',
    umur: 33,
    email: 'sandhikagalih@unpas.ac.id'
};

function getIdMhs({ id, nama }) {
    return `id: ${id}, ini punya ${nama}`;
}
console.log(getIdMhs(mhs));


