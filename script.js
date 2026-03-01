// === Apps Script Endpoint ===
const scriptURL = "https://script.google.com/macros/s/AKfycbxzaoGM7qpX3q1kvsCzvgUU1NV4oe6BBksLsdEW49DoMB5nCiTj8ycMVVBUMpybgYA1/exec";

// === Ambil Nama dari URL (?to=Nama) ===
const params = new URLSearchParams(window.location.search);
const guestName = params.get("to");

const namaInput = document.getElementById("nama");
const guestElement = document.getElementById("guest");

if (guestName) {
  guestElement.innerText = "Kepada Yth. " + guestName;
  namaInput.value = guestName;
}

// === Countdown ===
const targetDate = new Date("June 13, 2026 08:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance > 0) {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("countdown").innerText =
      days + " Hari Lagi";
  } else {
    document.getElementById("countdown").innerText =
      "Hari Bahagia Telah Tiba";
  }
}, 1000);

// === Opening + Music ===
const openBtn = document.getElementById("openBtn");
const opening = document.getElementById("opening");
const bgMusic = document.getElementById("bgMusic");

openBtn.addEventListener("click", () => {
  bgMusic.play();
  opening.style.opacity = "0";
  setTimeout(() => {
    opening.style.display = "none";
  }, 500);
});

// === Submit RSVP ===
const form = document.getElementById("rsvpForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    nama: document.getElementById("nama").value,
    kategori: document.getElementById("kategori").value,
    kehadiran: document.getElementById("kehadiran").value,
    ucapan: document.getElementById("ucapan").value
  };

  message.innerText = "Mengirim...";

  try {
    await fetch(scriptURL, {
      method: "POST",
      body: JSON.stringify(data)
    });

    message.innerText = "Terima kasih atas konfirmasinya 🤍";
    form.reset();
  } catch (error) {
    message.innerText = "Terjadi kesalahan. Coba lagi.";
  }
});