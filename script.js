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
}, 1000)
const params = new URLSearchParams(window.location.search);
const guestName = params.get("to");

if (guestName) {
  document.getElementById("guest").innerHTML =
    "Kepada Yth. " + guestName;

  const rsvpButton = document.getElementById("rsvpBtn");
  rsvpButton.href =
    "https://docs.google.com/forms/d/e/1R7yiO8rVciWMLafxR5Mzls68sU42kxN6mV3vt8eHKhc/viewform?entry.1234567890=" +
    encodeURIComponent(guestName);
};