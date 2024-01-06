// // DOM Selection
// // document.querySelector() -> element

// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';

// const li2 = document.querySelector('section#b ul li:nth-child(2');
// li2.style.backgroundColor = 'orange';



// // document.querySelectorAll() -> nodeLIst
// const p = document.querySelectorAll('p');
// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'lightblue';
// }









const sectionB = document.querySelector('section#b');
const p4 = sectionB.getElementsByTagName('p')[0];
p4.style.backgroundColor = 'orange';