const quotes = [
   "Happy Birthday, Sofiaa! So grateful to have you in my life. Wishing you lots of happiness, love, and success this year. You’re amazing, never forget that 💕",
    "Tenang aja, aku selalu ada buat mu, Sofiaa.",
  "Aku percaya banget kamu bisa jadi versi terbaik diri mu.",
  "Pokoknya jangan pendam sendiri yaa, cerita aja ke aku.",
  "Kalau capek, jangan lupa istirahat mu penting banget.",
  "Semangatt lagi yuk, aku dukung mu terus.",
  "Sofiaa, you're one of the most precious people in my life.",
  "Having you as my friend is one of the best gifts ever.",
  "You're stronger, kinder, and brighter than you realize.",
  "Never forget how amazing you truly are."
];

function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById('quotes');
    
    // Tambahkan efek transisi
    quoteElement.style.opacity = 0; // Mulai dengan menghilang
    setTimeout(() => {
        quoteElement.innerText = quotes[randomIndex];
        quoteElement.style.opacity = 1; // Tampilkan kembali
    }, 500); // Waktu untuk menghilang
}

function changeTheme() {
    const body = document.body;
    const currentTheme = body.style.backgroundColor;

    if (currentTheme === 'rgba(255, 255, 255, 0.8)') {
        body.style.backgroundColor = '#ba7396'; // Ubah ke warna pink
        body.style.color = '#fff'; // Ubah teks menjadi putih
    } else {
        body.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'; // Kembali ke latar belakang putih
        body.style.color = '#333'; // Kembali ke teks hitam
    }
}

// Fungsi untuk membuat hati bergerak di latar belakang
function createHearts() {
    const background = document.querySelector('.background');
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw'; // Posisi horizontal acak
        heart.style.animationDuration = (Math.random() * 50 + 3) + 's'; // Durasi animasi acak
        heart.style.opacity = Math.random(); // Opasitas acak
        background.appendChild(heart);
    }
}

// Fungsi untuk membuat kotak bergerak di latar belakang
function createSquares() {
    const background = document.querySelector('.background');
    for (let i = 0; i < 10; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        square.style.left = Math.random() * 100 + 'vw'; // Posisi horizontal acak
        square.style.top = Math.random() * 100 + 'vh'; // Posisi vertikal acak
        square.style.animationDuration = (Math.random() * 200 + 100) + 's'; // Durasi animasi acak
        square.style.opacity = Math.random(); // Opasitas acak
        background.appendChild(square);
    }
}

// Panggil fungsi untuk membuat hati dan kotak saat halaman dimuat
window.onload = () => {
    newQuote();
    createHearts();
    createSquares();
};