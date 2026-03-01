// === Ambil Nama dari URL (?to=Nama) ===
const params = new URLSearchParams(window.location.search);
const guestName = params.get("to");

// === Google Form Config ===
const formBase =
  "https://docs.google.com/forms/d/e/1FAIpQLSedn56DFoxM-TF0PJf06QG5aZoA-Fq0wEPfjdg_skdqCaUEzg/viewform?entry.385965829=";

const rsvpBtn = document.getElementById("rsvpBtn");
const guestElement = document.getElementById("guest");

// === Personal Greeting + Set RSVP Link ===
if (guestName) {
  guestElement.innerText = "Kepada Yth. " + guestName;
  rsvpBtn.href = formBase + encodeURIComponent(guestName);
} else {
  guestElement.innerText = "";
  rsvpBtn.href =
    "https://docs.google.com/forms/d/e/1FAIpQLSedn56DFoxM-TF0PJf06QG5aZoA-Fq0wEPfjdg_skdqCaUEzg/viewform";
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

// === Opening Screen + Music ===
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

// === Fade Transition Before Opening Form ===
const overlay = document.createElement("div");
overlay.classList.add("fade-overlay");
document.body.appendChild(overlay);

rsvpBtn.addEventListener("click", function (e) {
  e.preventDefault();

  overlay.classList.add("active");
  rsvpBtn.innerText = "Membuka Form...";

  setTimeout(() => {
    window.open(rsvpBtn.href, "_blank");
    overlay.classList.remove("active");
    rsvpBtn.innerText = "Konfirmasi Kehadiran";
  }, 500);
});