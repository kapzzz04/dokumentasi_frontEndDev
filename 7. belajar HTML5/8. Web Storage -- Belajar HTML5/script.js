
const judul = document.querySelector('h1');

let nama = localStorage.getItem('nama');
if (!nama) {
    nama = prompt('masukan nama anda: ');
    localStorage.setItem('nama', nama);
}

judul.innerHTML = `Halo, ${nama}!`;

// Ganti Nama
const gantiNama = (e) => {
    nama = prompt('Masukan nama baru anda: ');
    localStorage.setItem('nama', nama);
    e.preventDefault();
}

// Hapus Nama 
const hapusNama = (e) => {
    localStorage.removeItem('nama');
    e.preventDefault();
}


// Hapus Storage 
const hapusStorage = (e) => {
    localStorage.clear();
    e.preventDefault();
}

// ---------------------------------------------------------------------------------

// Dark mode & light mode
const toggle = document.querySelector('.toggle');
let tema = localStorage.getItem('tema');
const body = document.body;

if (!tema) {
    localStorage.setItem('tema', 'light');
}

const darkMode = function () {
    body.classList.add('dark-mode');
    toggle.innerHTML = 'Light Mode';
    localStorage.setItem('tema', 'dark');
}

const lightMode = function () {
    body.classList.remove('dark-mode');
    toggle.innerHTML = 'Dark Mode';
    localStorage.setItem('tema', 'light');
}

if (tema === 'dark') {
    darkMode();
}

toggle.addEventListener('click', function (e) {
    tema = localStorage.getItem('tema');
    if (tema === 'light') {
        darkMode();
    } else {
        lightMode();
    }
    e.preventDefault();
});

// Akhir dark mode