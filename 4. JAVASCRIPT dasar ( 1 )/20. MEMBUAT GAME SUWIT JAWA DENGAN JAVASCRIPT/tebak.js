
// latihan dari pak shandika galih awalan..


alert('tebak angka dari 1-10 \nKamu punya 3 kesempatan');

for (var i = 2; i >= 0; i--) {

    var p = prompt('masukan angka tebakan');

    var comp = Math.random();

    if (comp < 0.35) {
        comp = '9';
    } else if (comp >= 0.35 && comp < 0.67) {
        comp = '6';
    } else if (comp < 0.83 && comp >= 0.68) {
        comp = '4'
    }
    else {
        comp = '8';
    }

    console.log(comp);

    var hasil = '';
    var w = true;

    if (comp == '6') {
        while (w) {
            w = alert('anda benar \nAngka yang dicari adalah : ' + p);
        }
        i = i - 5;
    } else {
        if (i == 0) {
            i = i - 5;
        } else {
            alert('terlalu RENDAH \nayo masih ada ' + i + ' kesempatan');
        }
    }
}

if (comp == '6') {
    alert('terimakasih');
} else {
    alert('Terlalu RENDAH \nKesempatan anda habis');
    alert('anda gagal \nAngka yang dicari adalah : ' + comp);
}

// akhir latihan

