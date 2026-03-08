const scriptURL = "https://script.google.com/macros/s/AKfycbxzaoGM7qpX3q1kvsCzvgUU1NV4oe6BBksLsdEW49DoMB5nCiTj8ycMVVBUMpybgYA1/exec";

/* ─────────────────────────────
   GREETING
───────────────────────────── */
const params    = new URLSearchParams(window.location.search);
const guestName = params.get("to");
document.getElementById("openingGuest").innerText = guestName || "Tamu Undangan";
if (guestName) document.getElementById("nama").value = guestName;

/* ─────────────────────────────
   SVG ASSETS  (inline, no extra file needed)
───────────────────────────── */

/** Javanese batik-scroll corner — terracotta / gold palette **/
function cornerSVG() {
  return `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- outer L-frame -->
    <path d="M2 2 L28 2 L28 6 L6 6 L6 28 L2 28 Z" fill="#c0392b" opacity=".55"/>
    <!-- inner decorative scroll -->
    <path d="M10 10 Q18 6 22 14 Q26 22 18 26 Q10 30 6 22" stroke="#c8943a" stroke-width="1.2" fill="none" opacity=".7"/>
    <path d="M14 4 Q20 10 14 16" stroke="#c0392b" stroke-width=".9" fill="none" opacity=".6"/>
    <!-- small plumeria -->
    <circle cx="20" cy="20" r="2.5" fill="#e8b86a" opacity=".75"/>
    <ellipse cx="20" cy="14.5" rx="2" ry="3.5" fill="#f2c5bc" opacity=".8" transform="rotate(0 20 14.5)"/>
    <ellipse cx="25" cy="17.5" rx="2" ry="3.5" fill="#f2c5bc" opacity=".8" transform="rotate(72 20 20)"/>
    <ellipse cx="23" cy="23.5" rx="2" ry="3.5" fill="#f2c5bc" opacity=".8" transform="rotate(144 20 20)"/>
    <ellipse cx="16" cy="24" rx="2" ry="3.5" fill="#f2c5bc" opacity=".8" transform="rotate(216 20 20)"/>
    <ellipse cx="14" cy="17" rx="2" ry="3.5" fill="#f2c5bc" opacity=".8" transform="rotate(288 20 20)"/>
    <!-- dot accent -->
    <circle cx="8" cy="8" r="1.5" fill="#c8943a" opacity=".6"/>
    <circle cx="26" cy="5" r="1" fill="#c8943a" opacity=".5"/>
    <circle cx="5" cy="26" r="1" fill="#c8943a" opacity=".5"/>
  </svg>`;
}

/** SVG lantern (cartoon style matching image) **/
function lanternSVG(scale = 1) {
  const w = Math.round(32 * scale), h = Math.round(68 * scale);
  return `<svg class="lantern-svg" width="${w}" height="${h}" viewBox="0 0 32 68" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- string -->
    <line x1="16" y1="0" x2="16" y2="8" stroke="#7a3d28" stroke-width="1.2"/>
    <!-- cap -->
    <path d="M8 8 Q16 6 24 8 L22 14 Q16 12 10 14 Z" fill="#c0392b"/>
    <!-- body -->
    <path d="M10 14 Q5 22 5 34 Q5 46 10 54 L22 54 Q27 46 27 34 Q27 22 22 14 Z" fill="#d4523e"/>
    <!-- glow inside -->
    <ellipse cx="16" cy="34" rx="8" ry="14" fill="#f9d090" opacity=".45"/>
    <ellipse cx="16" cy="34" rx="4" ry="8" fill="#fffbe6" opacity=".6"/>
    <!-- ribs -->
    <path d="M7 22 Q16 20 25 22" stroke="#c0392b" stroke-width=".8" fill="none" opacity=".6"/>
    <path d="M6 30 Q16 27 26 30" stroke="#c0392b" stroke-width=".8" fill="none" opacity=".5"/>
    <path d="M6 38 Q16 35 26 38" stroke="#c0392b" stroke-width=".8" fill="none" opacity=".5"/>
    <path d="M7 46 Q16 43 25 46" stroke="#c0392b" stroke-width=".8" fill="none" opacity=".6"/>
    <!-- bottom cap -->
    <path d="M10 54 Q16 56 22 54 L22 60 Q16 62 10 60 Z" fill="#c0392b"/>
    <!-- tassel -->
    <line x1="14" y1="60" x2="13" y2="68" stroke="#c8943a" stroke-width="1"/>
    <line x1="16" y1="60" x2="16" y2="68" stroke="#c8943a" stroke-width="1"/>
    <line x1="18" y1="60" x2="19" y2="68" stroke="#c8943a" stroke-width="1"/>
    <!-- gold ring accents -->
    <path d="M10 14 Q16 12 22 14" stroke="#c8943a" stroke-width="1.2" fill="none"/>
    <path d="M10 54 Q16 56 22 54" stroke="#c8943a" stroke-width="1.2" fill="none"/>
  </svg>`;
}

/** SVG plumeria petal (for floating) **/
function plumeriaSVG(color) {
  return `<svg viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="16" rx="7" ry="13" fill="${color}" opacity=".78"/>
    <path d="M12 4 Q15 10 14 18 Q13 23 12 26" stroke="rgba(255,255,255,.3)" stroke-width=".7" fill="none"/>
    <circle cx="12" cy="16" r="2.5" fill="#f9d090" opacity=".6"/>
  </svg>`;
}

/* ─────────────────────────────
   INJECT CARD CORNERS
───────────────────────────── */
function addCardCorners() {
  document.querySelectorAll(".javanese-card").forEach(card => {
    ["tl","tr","bl","br"].forEach(pos => {
      const div = document.createElement("div");
      div.className = `card-corner ${pos}`;
      div.innerHTML = cornerSVG();
      card.appendChild(div);
    });
  });
}

/* ─────────────────────────────
   INJECT LANTERNS
───────────────────────────── */
function addLanterns() {
  const row = document.getElementById("lanternRow");
  if (!row) return;
  [1, 1.2, 1].forEach(scale => {
    const wrap = document.createElement("div");
    wrap.innerHTML = lanternSVG(scale);
    row.appendChild(wrap);
  });
}

/* ─────────────────────────────
   FLOATING PETALS
───────────────────────────── */
const petalColors = ["#e07060","#d4523e","#f2c5bc","#c8943a","#e2b86a","#8fa882","#f0d4cc"];

function spawnPetal() {
  const container = document.getElementById("petalsContainer");
  if (!container) return;

  const el       = document.createElement("div");
  el.className   = "petal";
  const size     = Math.random() * 14 + 10;
  const left     = Math.random() * 100;
  const dur      = Math.random() * 9 + 9;
  const delay    = Math.random() * 4;
  const color    = petalColors[Math.floor(Math.random() * petalColors.length)];

  el.innerHTML   = plumeriaSVG(color);
  el.style.cssText = `
    left:${left}%;
    width:${size}px; height:${size * 1.25}px;
    animation-duration:${dur}s;
    animation-delay:${delay}s;
    transform:rotate(${Math.random()*360}deg);
  `;
  container.appendChild(el);
  setTimeout(() => el.remove(), (dur + delay) * 1000 + 500);
}

function startPetals() {
  for (let i = 0; i < 10; i++) setTimeout(spawnPetal, i * 350);
  setInterval(spawnPetal, 1100);
}

/* ─────────────────────────────
   COUNTDOWN
───────────────────────────── */
const target = new Date("June 13, 2026 08:00:00").getTime();

function pad(n) { return String(n).padStart(2, "0"); }

function tick() {
  const d = target - Date.now();
  if (d <= 0) return;
  document.getElementById("days").textContent    = pad(Math.floor(d / 86400000));
  document.getElementById("hours").textContent   = pad(Math.floor(d / 3600000) % 24);
  document.getElementById("minutes").textContent = pad(Math.floor(d / 60000) % 60);
  document.getElementById("seconds").textContent = pad(Math.floor(d / 1000) % 60);
}
tick();
setInterval(tick, 1000);

/* ─────────────────────────────
   OPENING
───────────────────────────── */
document.getElementById("openBtn").addEventListener("click", () => {
  document.getElementById("bgMusic").play().catch(() => {});
  const el = document.getElementById("opening");
  el.style.opacity   = "0";
  el.style.transform = "scale(1.06)";
  setTimeout(() => { el.style.display = "none"; startPetals(); }, 1100);
});

/* ─────────────────────────────
   COPY TO CLIPBOARD
───────────────────────────── */
function copyAccount(btn, number) {
  const doFlash = () => {
    const orig = btn.innerText;
    btn.innerText = "✓ Tersalin";
    btn.classList.add("copied");
    setTimeout(() => { btn.innerText = "Salin"; btn.classList.remove("copied"); }, 2200);
  };
  if (navigator.clipboard) {
    navigator.clipboard.writeText(number).then(doFlash).catch(doFlash);
  } else {
    const ta = document.createElement("textarea");
    ta.value = number;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
    doFlash();
  }
}
window.copyAccount = copyAccount;

/* ─────────────────────────────
   RSVP SUBMIT
───────────────────────────── */
document.getElementById("rsvpForm").addEventListener("submit", async e => {
  e.preventDefault();
  const data = {
    nama:      document.getElementById("nama").value,
    kategori:  document.getElementById("kategori").value,
    kehadiran: document.getElementById("kehadiran").value,
    ucapan:    document.getElementById("ucapan").value,
  };
  const msg = document.getElementById("formMessage");
  msg.style.color = "";
  msg.innerText   = "Mengirim...";
  try {
    await fetch(scriptURL, { method:"POST", body:JSON.stringify(data) });
    msg.style.color = "#8fa882";
    msg.innerText   = "Terima kasih atas doa dan kehadirannya 🤍";
    e.target.reset();
    if (guestName) document.getElementById("nama").value = guestName;
    loadUcapan();
  } catch {
    msg.style.color = "#c0392b";
    msg.innerText   = "Terjadi kesalahan. Mohon coba lagi.";
  }
});

/* ─────────────────────────────
   LOAD MESSAGE BOARD
───────────────────────────── */
async function loadUcapan() {
  try {
    const res  = await fetch(scriptURL);
    const data = await res.json();
    const box  = document.getElementById("ucapanList");
    box.innerHTML = "";
    const items = data.reverse().slice(0, 50).filter(i => i.Nama && i.Ucapan);
    if (!items.length) {
      box.innerHTML = '<p style="text-align:center;font-style:italic;font-size:.9rem;color:#9a7050;padding:16px 0;">Jadilah yang pertama memberikan ucapan 🤍</p>';
      return;
    }
    items.forEach(item => {
      const div = document.createElement("div");
      div.className = "ucapan-item";
      div.innerHTML = `
        <strong>${item.Nama}${item.Kategori ? " · " + item.Kategori : ""}</strong>
        <p>${item.Ucapan}</p>
        <span class="badge ${item.Kehadiran === "Hadir" ? "hadir" : "tidak"}">${item.Kehadiran}</span>`;
      box.appendChild(div);
    });
  } catch { /* silent fail */ }
}
window.addEventListener("load", loadUcapan);

/* ─────────────────────────────
   GALLERY CAROUSEL + DOTS + AUTO
───────────────────────────── */
function initCarousel() {
  const track = document.getElementById("carouselTrack");
  const nav   = document.getElementById("carouselNav");
  if (!track || !nav) return;
  const slides = [...track.querySelectorAll(".photo-slide")];
  if (!slides.length) return;

  // dots
  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "carousel-dot" + (i === 0 ? " active" : "");
    dot.setAttribute("aria-label", `Foto ${i + 1}`);
    dot.addEventListener("click", () =>
      slides[i].scrollIntoView({ behavior:"smooth", block:"nearest", inline:"center" })
    );
    nav.appendChild(dot);
  });

  // active dot on scroll
  track.addEventListener("scroll", () => {
    const cx = track.getBoundingClientRect().left + track.clientWidth / 2;
    let best = 0, bestDist = Infinity;
    slides.forEach((s, i) => {
      const d = Math.abs(s.getBoundingClientRect().left + s.offsetWidth / 2 - cx);
      if (d < bestDist) { bestDist = d; best = i; }
    });
    nav.querySelectorAll(".carousel-dot").forEach((d, i) => d.classList.toggle("active", i === best));
  }, { passive:true });

  // auto-advance dimatikan — user scroll sendiri
}
window.addEventListener("load", initCarousel);

/* ─────────────────────────────
   SCROLL REVEAL
───────────────────────────── */
function reveal() {
  const h = window.innerHeight;
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < h - 70) el.classList.add("active");
  });
}
window.addEventListener("scroll", reveal, { passive:true });
window.addEventListener("load",   reveal);

/* ─────────────────────────────
   PARALLAX HERO
───────────────────────────── */
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  if (hero) hero.style.transform = `translateY(${window.scrollY * 0.03}px)`;
}, { passive:true });

/* ─────────────────────────────
   INIT ON LOAD
───────────────────────────── */
window.addEventListener("load", () => {
  addCardCorners();
  addLanterns();
});
