const scriptURL = "https://script.google.com/macros/s/AKfycbxzaoGM7qpX3q1kvsCzvgUU1NV4oe6BBksLsdEW49DoMB5nCiTj8ycMVVBUMpybgYA1/exec";

const params = new URLSearchParams(window.location.search);
const guestName = params.get("to");

const openingGuest = document.getElementById("openingGuest");
const namaInput = document.getElementById("nama");

if (guestName) {
  openingGuest.innerText = guestName;
  namaInput.value = guestName;
} else {
  openingGuest.innerText = "Tamu Undangan";
}

const targetDate = new Date("June 13, 2026 08:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance > 0) {
    document.getElementById("days").innerText =
      Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("hours").innerText =
      Math.floor((distance / (1000 * 60 * 60)) % 24);

    document.getElementById("minutes").innerText =
      Math.floor((distance / (1000 * 60)) % 60);

    document.getElementById("seconds").innerText =
      Math.floor((distance / 1000) % 60);
  }
}, 1000);

const openBtn = document.getElementById("openBtn");
const opening = document.getElementById("opening");
const bgMusic = document.getElementById("bgMusic");

openBtn.addEventListener("click", () => {
  bgMusic.play();
  opening.style.opacity = "0";
  setTimeout(() => {
    opening.style.display = "none";
  }, 800);
});

const form = document.getElementById("rsvpForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    nama: namaInput.value,
    kategori: document.getElementById("kategori").value,
    kehadiran: document.getElementById("kehadiran").value,
    ucapan: document.getElementById("ucapan").value
  };

  message.innerText = "Sending...";

  try {
    await fetch(scriptURL, {
      method: "POST",
      body: JSON.stringify(data)
    });

    message.innerText = "Thank you for your confirmation 🤍";
    form.reset();
  } catch (error) {
    message.innerText = "Something went wrong.";
  }
});