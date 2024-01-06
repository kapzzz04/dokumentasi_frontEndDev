function getComp() {
    var comp = Math.random();
    if (comp < 0.34) return 'kertas';
    if (comp >= 0.34 && comp < 0.67) return 'gunting';
    return 'batu';
}

function getTotal(e) {

    var tl = 0;

    if (e == 'KALAH!') return tl += 1;
    if (e == 'MENANG!') return tl += 1;
    if (e == 'SERI!') return tl;

}

function getJalan(p, comp) {
    if (p == comp)
        return 'SERI!';
    if (p == 'gunting')
        return (comp == 'kertas') ? 'MENANG!' : 'KALAH!';
    if (p == 'kertas')
        return (comp == 'batu') ? 'MENANG!' : 'KALAH!';
    if (p == 'batu')
        return (comp == 'gunting') ? 'MENANG!' : 'KALAH!';
}

const lu = document.querySelectorAll('li img');
const player = document.querySelector('.player1');
const comp = document.querySelector('.komp1');

// untuk menghitung skor
var totalL = 0;
var totalJ = 0;
function par(i) {
    if (i == 'KALAH!') {
        totalJ += 1;
    } else if (i == 'MENANG!') {
        totalL += 1;
    } else {
        totalL += 0;
    }
}



lu.forEach(function (i) {

    i.addEventListener('click', function () {
        var get1 = getComp();
        var get2 = i.className;
        var hasil = getJalan(get2, get1);
        par(hasil);

        player.innerHTML = totalL;
        comp.innerHTML = totalJ;

        const img = document.querySelector('.img-komputer');
        img.setAttribute('src', 'img/' + get1 + '.png');

        const div = document.querySelector('.info');
        div.innerHTML = hasil;
    });
});








// if (hasil == 'MENANG!') total += 1;
// if (hasil == 'KALAH!') total += 1;
// if (e == 'SERI!') total += 0;

// var ter = function (hasil) {
//     const sil = document.querySelector('.info');
//     const baru = document.createElement('p');
//     const text = document.createTextNode(hasil);
//     baru.appendChild(text);

//     sil.appendChild(baru);
// }

// var p = ['batu', 'gunting', 'kertas'];

// const lu = document.querySelectorAll('li');
// const li = document.querySelector('div.area-player ul li:nth-child(1)');

// li.addEventListener('click', function () {
//     gok(p[0], comp)
//     console.log(hasil[0]);
//     console.log(ter(hasil[0]));
// });

// li.nextElementSibling.addEventListener('click', function () {
//     gok(p[1], comp)
//     console.log(hasil[0]);
//     ter(hasil[0])
// })

// li.nextElementSibling.nextElementSibling.addEventListener('click', function () {
//     gok(p[2], comp)
//     console.log(hasil[0]);
//     ter(hasil[0])
// })
























