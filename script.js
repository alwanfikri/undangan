// === Ambil Nama dari URL ===
const params = new URLSearchParams(window.location.search);
const guestName = params.get("to");

// === Google Form Base ===
const formBase =
  "https://docs.google.com/forms/d/e/1FAIpQLSedn56DFoxM-TF0PJf06QG5aZoA-Fq0wEPfjdg_skdqCaUEzg/viewform?embedded=true&entry.385965829=";

// === Elements ===
const rsvpBtn = document.getElementById("rsvpBtn");
const guestElement = document.getElementById("guest");
const modal = document.getElementById("rsvpModal");
const closeModal = document.getElementById("closeModal");
const formFrame = document.getElementById("formFrame");

// === Greeting + Set Form Source ===
if (guestName) {
  guestElement.innerText = "Kepada Yth. " + guestName;
  formFrame.src = formBase + encodeURIComponent(guestName);
} else {
  formFrame.src =
    "https://docs.google.com/forms/d/e/1FAIpQLSedn56DFoxM-TF0PJf06QG5aZoA-Fq0wEPfjdg_skdqCaUEzg/viewform?embedded=true";
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

// === Open RSVP Modal ===
rsvpBtn.addEventListener("click", () => {
  modal.classList.add("active");
});

// === Close RSVP Modal ===
closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});