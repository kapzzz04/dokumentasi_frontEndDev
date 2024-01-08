// 2.1 EXCUTION CONTEXT, HOISTING & SCOPE

// console.log(nama);
// var nama = 'Keyla';

// creation phase pada Global Context
// nama var = undefined
// nama function = fn()
// itu disebutnya Hoisting
// object.window atau window = object global
// this = object.window atau window

// execution phase


// beda lagi
// console.log(sayHello());

// var nama = 'Keyla';
// var umur = 16;

// function sayHello() {
//     return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// }

// function membuat Local Execution Context
// yang di dalamnya terdapat creation dan execution phase
// window / object window
// arguments atau object arguments
// melakukan hoisting juga


// pembahasan scope / function scope
// var nama = 'Keyla';
// var username = '@kapzz04';

// function cetakURL() {
//     console.log(arguments);
//     var instagramURL = 'http://instagram.com/';
//     return instagramURL + username;
// }

// console.log(cetakURL('@bebek233', '@erik'));















// beda lagi

// function a() {
//     console.log('ini a');

//     function b() {
//         console.log('ini b');

//         function c() {
//             console.log('ini c');
//         }

//         c();
//     }

//     b();
// }

// a();





// LATIHAN
function satu() {
    var nama = 'Keyla';
    console.log(nama);
}

function dua() {
    console.log(nama);
}

console.log(nama);
var nama = 'Erik';
satu();
dua('Doddy');
console.log(nama);



























































