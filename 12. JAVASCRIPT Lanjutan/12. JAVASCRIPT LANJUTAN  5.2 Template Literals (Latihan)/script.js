// 1. HTML Fragments 
// const mhs = {
//     nama: 'Sandhika Galih',
//     umur: 33,
//     nrp: '043040023',
//     email: 'sandhikagalih@unpas.ac.id'
// };

// const el = `<div class="mhs">
//               <h2>${mhs.nama}</h2>
//               <span class="nrp">${mhs.nrp}</span>
//             </div>`;



// 2. Looping
// const mhs = [
//     {
//         nama: 'Sandhika Galih',
//         email: 'sandhikagalih@unpas.ac.id'
//     },
//     {
//         nama: 'Doddy Ferdiansyah',
//         email: 'doddy@unpas.ac.id'
//     },
//     {
//         nama: 'Erik',
//         email: 'erik@unpas.ac.id'
//     }
// ];

// const el = `<div class="mhs">${mhs.map(m =>
//     `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`).join('')}
// </div>`;


// 3. Conditionals
// ternary
// const lagu = {
//     judul: 'Kau Adalah',
//     penyanyi: 'Isyana Saraswati',
//     feat: 'Rayi Putra'
// }

// const el = `<div class="lagu">
//         <ul>
//             <li>${lagu.penyanyi}</li>
//             <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//         </ul>
// </div>`;


// 4. Nested 
// HTML fragmenst bersarang

// const mhs = {
//     nama: 'Sandhika Galih',
//     semester: 5,
//     mataKuliah: [
//         'Rekayasa Web',
//         'Analisis dan Perancangan Sistem Informasi',
//         'Pemrograman Sistem Interaktif',
//         'Perancangan Sistem Berorientasi Object'
//     ]
// };

// function cetakMataKuliah(mataKuliah) {
//     return `<ol>
//                 ${mataKuliah.map(m => `<li>${m}</li>`).join('')}
//             </ol>`;
// };


// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="semester">Semester : ${mhs.semester}</span>
//     <h4>Mata Kuliah :</h4>
//     ${cetakMataKuliah(mhs.mataKuliah)}
// </div>`;



// 5. Pengkondisian dan pengulangan LAGU
const lagu = [
    {
        judul: 'Kau Adalah',
        penyanyi: 'Isyana Saraswati',
        feat: 'Rayi Putra'
    },
    {
        judul: 'Tetap Dalam Jiwa',
        penyanyi: 'Isyana Saraswati'
    },
    {
        judul: 'Give Love',
        penyanyi: 'AKMU'
    }
];

const el = `<div class="lagu">
       ${lagu.map(m =>
    `<ul>
        <li><b>Penyanyi :</b> ${m.penyanyi}</li>
        <li><b>Judul :</b> ${m.judul} ${m.feat ? `(feat. ${m.feat})` : ''}</li>
        </ul>`
).join('')}
</div>`;

document.body.innerHTML = el;