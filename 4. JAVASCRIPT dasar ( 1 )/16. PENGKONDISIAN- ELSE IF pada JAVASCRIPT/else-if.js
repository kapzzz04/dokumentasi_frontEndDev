var angka = prompt('masukan angka random');

if (angka % 2 == 0) {
    alert(angka + ' adalah angka GENAP');
} else if (angka % 2 == 1) {
    alert(angka + ' adalah angka GANJIL');
} else {
    alert('angka yang anda masukan salah');
}

