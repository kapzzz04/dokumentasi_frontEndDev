// Spread Operator
// memecah iterables menjadi single element

// const mhs = ['Sandhika', 'Doddy', 'Erik'];
// console.log(...mhs[0]);


// Menggabungkan 2 array
// const mhs = ['Sandhika', 'Doddy', 'Erik'];
// const dosen = ['Ade', 'Hendra', 'Wanda'];
// const orang = [...mhs, 'Aji', ...dosen];
// // const orang = mhs.concat(dosen);
// console.log(orang);


// meng-copy nilai pada array
// const mhs = ['Sandhika', 'Doddy', 'Erik'];
// // const mhs1 = mhs;
// const mhs1 = [...mhs];
// mhs1[0] = 'Fajar';
// console.log(mhs);


// const liMhs = document.querySelectorAll('li');
// // const mhs = [];
// // for (let i = 0; i < liMhs.length; i++) {
// //     mhs.push(liMhs[i].textContent);
// // }
// // console.log(mhs);
// const mhs = [...liMhs].map(a => a.textContent);
// console.log(mhs);

// beda kasus
const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');

nama.innerHTML = huruf;
