// const span = document.querySelector('.close');
// const card = document.querySelector('div .card');

// span.addEventListener('click', function () {
//     card.style.display = 'none';
// })

// DOM Traversal

const close = document.querySelectorAll('.close');

// for (let i = 0; i < close.length; i++) {
//     console.log(close[i]);
//     close[i].addEventListener('click', function (e) {
//         // close[i].parentElement.style.display = 'none';
//         e.target.parentElement.style.display = 'none';
//     });
// }

close.forEach(function (el) {
    console.log(el);
    el.addEventListener('click', function (e) {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    })

});



// const nama = document.querySelector('.nama');
// console.log(nama.nextElementSibling.nextElementSibling);
