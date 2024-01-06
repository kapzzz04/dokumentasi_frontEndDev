// Menyiapkan Canvas
const cans = document.getElementById('mycans');

// Atur ukuran Canvas
cans.width = window.innerWidth;
cans.height = window.innerHeight;

// Tentukan Context
const c = cans.getContext('2d');

// Manipulasi Canvas

// Membuat Rectangle
// c.fillStyle = 'pink';
// c.strokeStyle = '#999';
// c.lineWidth = '5';
// c.rect(50, 50, 200, 200);
// c.fill();
// c.stroke();

// Membuat Lingkaran // Circle / Arc
// c.fillStyle = 'lightblue';
// c.beginPath();
// c.arc(400, 150, 100, 0, 2 * Math.PI);
// c.fill();
// c.stroke();

// Membuat Path (Segitiga)
// c.fillStyle = 'orange';
// c.beginPath();
// c.moveTo(660, 60);
// c.lineTo(560, 260);
// c.lineTo(760, 260);
// c.closePath();
// c.fill();
// c.stroke();


// BARUuuuu

let x = 150;
let speedX = 10;
let speedY = 10;
let radius = 100;
let y = 100;

function draw() {
    window.requestAnimationFrame(draw);
    c.clearRect(0, 0, innerWidth, innerHeight);
    console.log('ok!');
    c.fillStyle = 'pink';
    c.strokeStyle = '#999';
    c.lineWidth = '5';
    c.beginPath();
    c.arc(x, y, radius, 0, 2 * Math.PI);
    c.fill();
    c.stroke();
    if (x + radius > innerWidth || x - radius < 0) {
        speedX = -speedX;
    } else if (y + radius > innerHeight || y - radius < 0) {
        speedY = -speedY;
    }
    x += speedX;
    y += speedY;
}

draw();





