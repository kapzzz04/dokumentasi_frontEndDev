var s = '';
var f = 10;

for (var i = 10; i > 0; i--) {

    for (var sp = 0; sp <= f - i; sp++) {
        s += ' ';
    }

    for (var j = 0; j < i; j++) {
        s += '*';
    }
    s += '\n';





}
console.log(s);

// ulangan 2 //

var tu = '';
var n = 20;

for (var p = 1; p < 20; p++) {

    for (var sp = 1; sp <= n - p + 1; sp++) {
        tu += ' ';
    }

    for (var j = 1; j <= p + (p - 1); j++) {
        tu += "*";
    }

    tu += '\n';

    if (19 == p) {

        for (var d = 20; d > 0; d--) {

            for (var spasi = 0; spasi <= n - d; spasi++) {
                tu += ' ';
            }

            for (var j = 1; j <= d + d - 1; j++) {
                tu += '*';
            }

            tu += '\n';
        }
    }
}
console.log(tu);


var tu = '';
var n = 10;

for (var p = 1; p <= 10; p++) {

    for (var sp = 1; sp <= n - p + 1; sp++) {
        tu += ' ';
    }

    for (var j = 1; j <= p + (p - 1); j++) {
        tu += "*";

    }

    tu += '\n';

}

console.log(tu);

// selanjutnya


var s = '';


for (var i = 1; i <= 10; i++) {

    if (i % 2 == 1) {

        for (var f = 10; f > 0; f--) {

            if (f % 2 == 0) {
                s += '#';
            } else {
                s += ' ';
            }
        }
        s += '\n';
    }


    if (i % 2 == 0) {

        for (var j = 10; j > 0; j--) {

            if (j % 2 == 1) {
                s += '#';
            } else {
                s += ' ';
            }
        }
        s += '\n';
    }


}

console.log(s);

// selanjutnya

var tu = '';
var n = 5;
var r = 1;


for (var p = 1; p <= 5; p++) {

    for (var sp = 1; sp <= n - p + 1; sp++) {
        tu += ' ';
    }

    for (var j = 1; j <= p + (p - 1); j++) {

        if (p == 3 & j == 3) {
            tu += 2;
        } else if (p == 4 & j == 3 || p == 4 & j == 5) {
            tu += 3;
        } else if (p == 5 & j == 3 || p == 5 & j == 5 || p == 5 & j == 7) {
            if (j == 5) {
                tu += 6;
            } else {
                tu += 4;
            }
        } else if (j % 2 == 1) {
            tu += r;
        } else {
            tu += ' ';
        }
    }
    tu += '\n';

}
console.log(tu);
