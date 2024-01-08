// Callback
// synchronous  callback
// function halo(nama) {
//     alert(`Halo ${nama}`);
// }

// function tampilkanPesan(callback) {
//     const nama = prompt('Masukan nama : ');
//     callback(nama);
// }

// tampilkanPesan(nama => alert(`Halo, ${nama}`));


// const mhs = [
//     {
//         "nama": "Sandhika Galih",
//         "nrp": "043040023",
//         "email": "sandhikagalih@unpas.ac.id",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 1
//     },
//     {
//         "nama": "Doddy Ferdiansyah",
//         "nrp": "133040123",
//         "email": "doddy@gmail.com",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 2
//     },
//     {
//         "nama": "Erik",
//         "nrp": "10404001",
//         "email": "sandhikagalih@unpas.ac.id",
//         "jurusan": "Teknik Industri",
//         "idDosenWali": 2
//     }
// ];

//         console.log('mulai');
//         mhs.forEach(e => {
//             for (let i = 0; i < 10000000; i++) {
//                 let date = new Date();
//             }
//             console.log(e.nama);
//         });
//         console.log('selesai');




// Asynchronous Callback 
// Vanila js atau javascript murni
// function getDataMahasiswa(url, success, eror) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 success(xhr.response);
//             } else if (xhr.status === 404) {
//                 eror();
//             }
//         }
//     }

//     xhr.open('get', url);
//     xhr.send();
// }

// console.log('mulai');
// getDataMahasiswa('data/mahasiswa.json', results => {
//     const mhs = JSON.parse(results);
//     mhs.forEach(m => console.log(m.nama));
// }, () => {

// });
// console.log('selesai');



// JQuery
console.log('mulai');
$.ajax({
    url: 'data/mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
    },
    eror: (e) => {
        console.log(e.responseText);
    }
});
console.log('selesai');


