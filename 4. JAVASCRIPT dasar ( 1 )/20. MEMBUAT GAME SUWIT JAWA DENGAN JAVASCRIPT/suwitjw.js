var tanya = true;
while (tanya) {
    // menangkap pilihan player
    var p = prompt('pilih : kertas, gunting, batu');
    

    // menagkap pilihan komputer
    // membangkitkan bilangan random

    var comp = Math.random();

    console.log(comp);

    if (comp < 0.34) {
        comp = 'kertas';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'gunting';
    } else {
        comp = 'batu';
    }

    var hasil = '';
    // menentukan rules
    if (p == comp) {
        hasil = 'SERI!';
    } else if (p == 'gunting') {
        hasil = (comp == 'kertas') ? 'MENANG!' : 'KALAH!';
    } else if (p == 'kertas') {
        hasil = (comp == 'batu') ? 'MENANG!' : 'KALAH!';
    } else if (p == 'batu') {
        hasil = (comp == 'gunting') ? 'MENANG!' : 'KALAH!';
    } else {
        hasil = 'yang kamu masukan tidak sesuai';
    }

console.log(hasil + 'hai');
    // menampilkan hasilnya
    alert('Kamu memilih : ' + p + ' dan komputer memilih : ' + comp + '\nMaka hasilnya kamu : ' + hasil);

    tanya = confirm('lagi?');
}

alert('terimakasih sudah memainkan permainannya');



