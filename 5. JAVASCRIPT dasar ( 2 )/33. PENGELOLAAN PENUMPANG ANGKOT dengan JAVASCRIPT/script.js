
var penumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang) {

    // jika angkot kosong
    if (penumpang.length == 0) {
        // tambah penumpang di awal array
        penumpang.push(namaPenumpang);
        // kembalikan isi array & keluar dari function
        return penumpang;
    } else {
        // telusuri kursi dari awal
        for (var i = 0; i < penumpang.length; i++) {
            // jika ada kursi kosong
            if (penumpang[i] == undefined) {
                // tambah penumpang dikursi tersebut
                penumpang[i] = namaPenumpang;
                // kembalikan isi array & keluar dari function
                return penumpang;
                // jika sudah ada nama yang sama
            } else if (penumpang[i] == namaPenumpang) {
                // tampilkan pesan kesalahannya
                console.log(namaPenumpang + ' sudah ada di dalam angkot');
                // kembalikan isi array & keluar dari function
                return penumpang;
                // jika seluruh kursi terisi
            } else if (i == penumpang.length - 1) {
                // tambah penumpang diakhir array
                penumpang.push(namaPenumpang);
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
        }
    }
}

var hapusPenumpang = function (namaPenumpang, penumpang) {
    // jika angkot kosong
    if (penumpang == 0) {
        // tampilkan pesan bahwa angkot kosong
        console.log('Angkot masih kosong!');
        return penumpang;
    } else {
        // jika ada penumpang yang namanya sesuai
        for (var i = 0; i < penumpang.length; i++) {
            if (namaPenumpang == penumpang[i]) {
                // hapus nama penumpang pada array dengan memberi nilai undefined
                penumpang[i] = undefined;
                return penumpang;
            } else if (i == penumpang.length - 1) {
                console.log(namaPenumpang + ' tidak ada di dalam Angkot.');
                return penumpang;
            }
        }
    }
}


var arr = ['Keyla', 'Galih', 'nofa'];
arr.splice(2, 1);
console.log(arr.join(' - '));