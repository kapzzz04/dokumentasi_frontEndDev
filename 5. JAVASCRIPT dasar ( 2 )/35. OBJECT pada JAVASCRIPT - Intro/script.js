
// contoh 1
// var mahasiswa = ["Keyla azahra", true, [2.90, 3.10, 3.25, 2.88, 3.04]];

// function IPKumulatif(IPSemester) {
//     var total = 0;
//     for (var i = 0; i < IPSemester.length; i++) {
//         total += IPSemester[i];
//     }
//     return total / IPSemester.length;
// }

// console.log(IPKumulatif(mahasiswa[2]));

// contoh 2
// var mahasiswa = {
//     nama: "Keyla Azahra",
//     lulus: true,
//     IPSemester: [2.90, 3.10, 3.25, 2.88, 3.04],
//     IPKumulatif: function () {
//         var total = 0;
//         var ips = this.IPSemester;
//         for (var i = 0; i < ips.length; i++) {
//             total += ips[i];
//         }
//         return total / ips.length;
//     }
// }

// console.log(mahasiswa.IPKumulatif());


// contoh 4
// var Orang = {
//     nama: "Keyla Azahra",
//     umur: 15,
//     pekerjaan: 'Front end Developer',
//     sapa: function () {
//         return 'HI, My name is ' + this.nama + ' usia saya ' + this.umur + ' tahun, dan saya adalah seorang ' + this.pekerjaan;
//     }
// }

// contoh 5
// var mhs = {
//     nama: "Keyla azahra",
//     umur: 15,
//     ips: [3.00, 2.50, 3.20],
//     alamat: {
//         jalan: "Jl. abc No. 123",
//         kota: 'Tangerang',
//         provinsi: "Banten"
//     }
// }