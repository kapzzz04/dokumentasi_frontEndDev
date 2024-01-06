const slider = document.querySelector('#slider');

slider.previousElementSibling.innerHTML = slider.min;
slider.nextElementSibling.innerHTML = slider.value;

slider.addEventListener('input', function () {
    slider.nextElementSibling.innerHTML = slider.value;
});

const warna = document.querySelector('#warna');

warna.nextElementSibling.innerHTML = warna.value;
warna.addEventListener('input', function () {
    warna.nextElementSibling.innerHTML = warna.value;
    warna.nextElementSibling.style.color = warna.value;
});

