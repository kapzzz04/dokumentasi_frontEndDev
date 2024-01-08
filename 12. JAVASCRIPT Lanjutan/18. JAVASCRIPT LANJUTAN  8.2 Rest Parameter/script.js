//Rest Parameter

// function myFunc() {
//     // return `a = ${a}, b =${b}, myArgs = ${myArgs}`;
//     // return myArgs;
//     // return Array.from(arguments);
//     return [...arguments];
// }

// console.log(myFunc(1, 2, 3, 4, 5,));

// function jumlahkan(...angka) {
//     // let total = 0;
//     // for (const a of angka) {
//     //     total += a;
//     // }
//     // return total;

//     return angka.reduce((a, b) => a + b);
// }

// console.log(jumlahkan(1, 2, 3, 4, 5,));




// array destructuring
// const kelompok1 = ['Sandhika', 'Doddy', 'Erik', 'Fajar', 'Hendra'];
// const [ketua, wakil, ...anggota] = kelompok1;



// object destructuring
// const team = {
//     pm: 'Sandhika',
//     frontEnd1: 'Doddy',
//     frontEnd2: 'Erik',
//     backEnd: 'Fajar',
//     ux: 'Hendra',
//     devOps: 'Ferry'
// }

// const { pm, ...myTeam } = team;
// console.log(pm);


// FIltering
function filterBy(type, ...values) {
    return values.filter(v => typeof v === type);
}
console.log(filterBy('string', 1, 2, 'Sandhika', false, 10, true, 'Doddy'));


