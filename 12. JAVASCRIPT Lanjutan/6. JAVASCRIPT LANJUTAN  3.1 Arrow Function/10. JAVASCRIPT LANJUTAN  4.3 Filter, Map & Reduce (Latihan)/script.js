// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));


// pilih hanya yang 'JAVASCRIPT LANJUTAN'
let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

    // ambil durasi masing" video
    .map(item => item.dataset.duration)

    // ubah durasi menjadi integer, ubah menit menjadi detik
    .map(waktu => {
        // 10:30 -> [10, 30]
        const parts = waktu.split(':').map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1];
    })


    // jumlahkan semua detik
    .reduce((total, detik) => total + detik);


// ubah formatnya jadi jam meut detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// simpan di DOM
const durasi = document.querySelector('.total-durasi');
durasi.textContent = `${jam} jam ${menit} menit ${detik} detik`;
const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const totalVideo = document.querySelector('.jumlah-video');
totalVideo.innerHTML = `${jmlVideo} Video.`;