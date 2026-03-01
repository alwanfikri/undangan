const params = new URLSearchParams(window.location.search);
const guestName = params.get("to");

if (guestName) {
  document.getElementById("guest").innerHTML =
    "Kepada Yth. " + guestName;
}

const targetDate = new Date("July 12, 2026 08:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  document.getElementById("countdown").innerHTML =
    days + " Hari Lagi";
}, 1000);