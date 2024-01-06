const mycanvas = document.getElementById('mycanvas');

mycanvas.widht = window.innerWidth;
mycanvas.height = window.innerHeight;

const c = mycanvas.getContext('2d');



// cara bikin Rectangle atau kotak
// c.fillStyle = 'pink';
// c.strokeStyle = '#333';
// c.lineWidth = 5;

// c.rect(50, 50, 200, 300);
// c.fill();
// c.stroke();


// cara bikin circle atau lingkaran
// c.fillStyle = 'lightblue';
// c.strokeStyle = '#000';
// c.lineWidth = 2;

// c.arc(300, 300, 150, 0, 2 * Math.PI);
// c.fill();
// c.stroke();



// cara membuat Path
c.fillStyle = 'lightgreen';
c.strokeStyle = '#000';
c.lineWidth = 2;

c.beginPath();
c.moveTo(100, 100);
c.lineTo(150, 300);
c.lineTo(300, 300);
c.lineTo(300, 100);
c.lineTo(100, 100);
c.fill();
c.stroke();

// untuk membuat segitiga
// c.beginPath();
// c.moveTo(150, 100);
// c.lineTo(50, 300);
// c.lineTo(250, 300);
// c.lineTo(150, 100);
// c.fill();
// c.stroke();


