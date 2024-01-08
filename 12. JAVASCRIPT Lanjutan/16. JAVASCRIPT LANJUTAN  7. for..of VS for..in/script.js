// for..of
// array
// const mhs = ['Sandhika', 'Doddy', 'Erik'];

// for (let i = 0; i < mhs.length; i++) {
//     console.log(mhs[i]);
// }

// mhs.forEach(m => console.log(m));

// for (const m of mhs) {
//     console.log(m);
// }

// / Looping string for..of
// const nama = 'Sandhika';
// for (const n of nama) {
//     console.log(n);
// }


// beda
// const mhs = ['Sandhika', 'Doddy', 'Erik'];
// // mhs.forEach((m, i) => {
// //     console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// // });

// for (const [i, m] of mhs.entries()) {
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// }



// NodeList
// const liNama = document.querySelectorAll('.nama');
// // liNama.forEach(n => console.log(n.textContent));
// for (n of liNama) {
//     console.log(n.innerHTML);
// }


// arguments
// function jumlahkanAngka() {
//     // return [1, 2, 3].reduce((a, i) => a + i);
//     // [1, 2, 3, 4, 5, 6].forEach(n => jumlah += n);
//     let jumlah = 0;
//     for (a of arguments) {
//         jumlah += a;
//     }
//     return jumlah;
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));



// FOR..IN
const mhs = {
    nama: 'Sandhika',
    umur: 33,
    email: 'sandhikagalih@unpas.ac.id'
}

for (m in mhs) {
    console.log(mhs[m]);
}