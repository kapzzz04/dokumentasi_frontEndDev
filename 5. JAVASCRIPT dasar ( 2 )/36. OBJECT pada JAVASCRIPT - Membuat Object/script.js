// Membuat Object
// Object Literal
var mhs1 = {
    nama: "Keyla Azahra",
    nrp: "043040023",
    email: 'keyno596@gmail.com',
    jurusan: "Teknik Informatika"
}

var mhs2 = {
    nama: "Doddy",
    nrp: "033040007",
    email: 'doddy@gmail.com',
    jurusan: "Teknik Industri"
}



// Function Declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {

    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;

}

var mhs3 = buatObjectMahasiswa('Azahra', '002056123', 'Lala@gmail.com', 'Teknik Spil');



// Constructor Function (keyword new)
function Mahasiswa(nama, nrp, email, jurusan) {
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa("Erik", '012030882', 'erik@gmail.com', 'Teknik Mesin');