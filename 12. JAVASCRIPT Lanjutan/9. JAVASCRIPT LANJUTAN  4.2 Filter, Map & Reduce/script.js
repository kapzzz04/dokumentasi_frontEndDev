const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// mencari angka >= 3
// for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }
// console.log(newAngka);



// Filter
// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka);




// kalikan semua angka dengan 2

// filter
// let bisa = [];
// const newAngka = angka.filter((a, c, d) => bisa[c] = a * 2);
// console.log(angka);
// console.log(bisa);

// map
// const newAngka = angka.map(a => a * 2);
// console.log(newAngka);
// console.log(angka);


// reduce
//  jumlahkan seluruh elemen pada array
// -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
// const newAngka = angka.reduce((accumulator, currentValue) =>
//     accumulator + currentValue, 5);
// console.log(newAngka);





// Method Chaining
// Cari angka > 5
// kalikan 3
// jumlahkan
const hasil = angka.filter(a => a > 5) // 8,9,9
    .map(a => a * 3) // 24, 27, 27
    .map(a => a / 2) // 12, 13.5, 13.5
    .reduce((acc, cur) => acc + cur); // 39
console.log(hasil);


















