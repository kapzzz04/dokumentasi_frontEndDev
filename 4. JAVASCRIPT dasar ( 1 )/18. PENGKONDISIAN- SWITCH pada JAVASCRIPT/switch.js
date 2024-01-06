
var item = prompt('masukan nama makanan / minuman: \n (cth: nasi,daging,susu,humburger,softdrink,)');

switch (item) {

    case 'nasi':
    case 'daging':
    case 'susu':
        alert('makanan / minuma SEHAT');
        break;
    case 'humburger':
    case 'softdrink':
        alert('makanan / minuma TIDAK SEHAT');
        break;
    default:
        alert('tidak sesuai intruksi');
        break;

}