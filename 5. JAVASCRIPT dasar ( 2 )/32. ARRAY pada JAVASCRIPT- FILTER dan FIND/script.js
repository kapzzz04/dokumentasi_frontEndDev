// 9. Filter & find
var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
var angka2 = angka.find(function (x) {
    return x > 5;
})
console.log(angka2);

const jika = ['key', 'lala', 'sandi', 'jihankeyla', 'khaizuranrizki', 'icaanisacakep'];
const lagu = jika.filter(word => word.length > 6);

console.log(lagu);