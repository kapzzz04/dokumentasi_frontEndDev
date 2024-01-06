// DOM Selection 
//  document.getElementById() -> element
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Keyno store';

// document.getElementsByTagName() -> HTMLCollection
const p = document.getElementsByTagName('p');

for (let i = 0; i < 4; i++) {
    p[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1');

// document.getElementsByClassName()
// -> HTMLCollection
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'JALAN_JALAN';