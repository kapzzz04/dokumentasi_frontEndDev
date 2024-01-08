// Template Literals / Template String
// const nama = 'Sandhika Galih';
// let umur = 33;
// console.log(`Halo, perkenalkan nama saya ${nama}, saya ${umur}     
// tahun.`);


// Embedded Expressions
// console.log(`${1 + 1}`);
// console.log(`${alert('hallo!')}`);
// const x = 10;
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);



// HTML Fragments
const mhs = {
    nama: 'Sandhika Galih',
    umur: 33,
    nrp: '043040023',
    email: 'sandhikagalih@unpas.ac.id'
};

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="nrp">${mhs.nrp}</span>
</div>`;

