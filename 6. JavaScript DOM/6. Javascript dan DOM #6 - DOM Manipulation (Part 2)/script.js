
// DOM Manipulation
// buat element baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf baru');
// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);

// simpan pBaru di akhir Section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);


// membuat list item baru
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('#b ul');
const li2 = ul.querySelector('li:nth-child(2)')

ul.insertBefore(liBaru, li2);









// parentNode.removeChild()
// parentNode.replaceChild()

// ini harus nya menangkap sectionA, tapi karena sectionA
// udah ada di atas udah di tangkap jadi gausha ditulis nnti nya eror

// const sectionA = document.getElementById('a');
const link = sectionA.querySelector('a');

sectionA.removeChild(link);

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const h2Teks = document.createTextNode('Judul Baru');

h2Baru.appendChild(h2Teks);

sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = 'aqua';
h2Baru.style.backgroundColor = 'salmon';
liBaru.style.backgroundColor = 'lightBlue';











