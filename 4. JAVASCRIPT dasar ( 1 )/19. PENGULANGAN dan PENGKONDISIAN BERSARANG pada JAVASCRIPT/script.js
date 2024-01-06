

var s = '';

for (var i = 10; i > 0; i--) {

    for (var p = 0; p < i; p++) {
        s += '*';
    }
    s += '\n';

}


console.log(s);