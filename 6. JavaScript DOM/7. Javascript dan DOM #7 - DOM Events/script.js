// const p3 = document.querySelector('.p3');

// function ubahWarnaP2() {
//     p2.style.backgroundColor = 'lightblue';
// }

// function ubahWarnaP3() {
//     p3.style.backgroundColor = 'lightblue';
// }

// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarnaP2;

// const p4 = document.querySelector('#b p');
// p4.addEventListener('click', function () {

//     const ul = document.querySelector('#b ul');
//     const liBaru = document.createElement('li');
//     const teksLi = document.createTextNode('item baru');
//     liBaru.appendChild(teksLi);
//     ul.appendChild(liBaru);

// });

// event handler
// const p3 = document.querySelector('.p3');
// p3.onclick = function () {
//     p3.style.backgroundColor = 'lightblue';
// }
// p3.onclick = function () {
//     p3.style.color = 'red';
// }

const p3 = document.querySelector('.p3');

p3.addEventListener('mouseenter', function () {
    p3.style.backgroundColor = 'lightblue';
    p3.style.color = 'black';
});
p3.addEventListener('mouseleave', function () {
    p3.style.backgroundColor = 'lightgreen';
    p3.style.color = 'lightgreen';
});





















