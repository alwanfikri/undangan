/* ===============================
CONFIG
================================ */

const scriptURL =
"https://script.google.com/macros/s/AKfycbxzaoGM7qpX3q1kvsCzvgUU1NV4oe6BBksLsdEW49DoMB5nCiTj8ycMVVBUMpybgYA1/exec"


/* ===============================
UTILITY FUNCTIONS
================================ */

function debounce(func, wait) {
  let timeout
  return function(...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), wait)
  }
}


/* ===============================
LANGUAGE SYSTEM
================================ */

const i18n = {

  id: {
    /* opening */
    "to":                   "Kepada Yth.",
    "open":                 "✦ Buka Undangan ✦",
    /* bismillah */
    "verse":                `"Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan dari jenismu sendiri agar kamu merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang."<br><em>(QS. Ar-Rum: 21)</em>`,
    "daughter":             "Putri ke 2 dari Bapak Didik Noorcahyono & Ibu Tentrem Hartati",
    "son":                  "Putra ke 5 dari Bapak Alm. Farid Anshori & Ibu Siti Wahyuni",
    /* countdown */
    "getting-married":      "Kami Akan Menikah",
    "days":                 "Hari",
    "hours":                "Jam",
    "minutes":              "Menit",
    "seconds":              "Detik",
    /* event */
    "event-title":          "Rangkaian Acara",
    "event-name1":           "Akad Nikah",
    "event-name2":           "Resepsi",
    "event-date":           "Sabtu, 13 Juni 2026",
    "event-time1":           "07.30 — 09.00 WIB",
    "event-time2":           "11.00 — 13.00 WIB",
    "save-calendar":        "Simpan ke Kalender",
    /* lokasi */
    "location-title":       "Lokasi",
    /* rsvp */
    "rsvp-title":           "RSVP",
    "form-name":            "Nama Lengkap",
    "placeholder-name":     "Masukkan nama Anda",
    "form-category":        "Kategori",
    "placeholder-category": "Pilih kategori",
    "cat-family":           "Keluarga",
    "cat-colleague":        "Rekan Kerja",
    "cat-friend":           "Teman",
    "form-attend":          "Kesediaan Hadir",
    "placeholder-attend":   "Konfirmasi kehadiran",
    "attend-yes":           "Hadir",
    "attend-no":            "Berhalangan",
    "form-wishes":          "Doa & Ucapan",
    "placeholder-wishes":   "Tuliskan doa dan ucapan tulus Anda...",
    "submit":               "Kirim",
    "wishes-title":         "Doa & Ucapan",
    /* gift */
    "gift-title":           "Hadiah Pernikahan",
    "gift-intro":           "Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless..",
    "copy":                 "Salin",
    "copied":               "✓ Tersalin",
    /* gallery */
    "gallery-title":        "Galeri",
    "gallery-loading":      "Memuat galeri...",
    "gallery-empty":        "Galeri sedang dalam proses 🤍",
    "gallery-error":        "Gagal memuat galeri. Coba refresh halaman.",
    /* footer */
    "footer-love":          "With love,",
    /* messages */
    "rsvp-sending":         "Mengirim...",
    "rsvp-success":         "Terima kasih atas doa dan kehadirannya 🤍",
    "rsvp-error":           "Terjadi kesalahan. Mohon coba lagi.",
    "ucapan-empty":         "Jadilah yang pertama memberikan ucapan 🤍",
    /* validation */
    "validation-name":      "Mohon masukkan nama Anda",
    "validation-category":  "Mohon pilih kategori",
    "validation-attend":    "Mohon konfirmasi kehadiran",
  },

  en: {
    /* opening */
    "to":                   "Dear,",
    "open":                 "✦ Open Invitation ✦",
    /* bismillah */
    "verse":                `"And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy."<br><em>(QS. Ar-Rum: 21)</em>`,
    "daughter":             "2nd Daughter of Mr. Didik Noorcahyono & Mrs. Tentrem Hartati",
    "son":                  "5th Son of the late Mr. Farid Anshori & Mrs. Siti Wahyuni",
    /* countdown */
    "getting-married":      "We Are Getting Married",
    "days":                 "Days",
    "hours":                "Hours",
    "minutes":              "Mins",
    "seconds":              "Secs",
    /* event */
    "event-title":          "Event Schedule",
    "event-name1":           "Akad Nikah",
    "event-name2":           "Reception",
    "event-date":           "Saturday, June 13, 2026",
    "event-time1":           "07.30 — 09.00 WIB",
    "event-time2":           "11.00 — 13.00 WIB",
    "save-calendar":        "Save to Calendar",
    /* lokasi */
    "location-title":       "Location",
    /* rsvp */
    "rsvp-title":           "RSVP",
    "form-name":            "Full Name",
    "placeholder-name":     "Enter your name",
    "form-category":        "Category",
    "placeholder-category": "Select category",
    "cat-family":           "Family",
    "cat-colleague":        "Colleague",
    "cat-friend":           "Friend",
    "form-attend":          "Attendance",
    "placeholder-attend":   "Confirm attendance",
    "attend-yes":           "Attending",
    "attend-no":            "Unable to Attend",
    "form-wishes":          "Prayer & Wishes",
    "placeholder-wishes":   "Share your heartfelt prayers and wishes...",
    "submit":               "Send",
    "wishes-title":         "Prayers & Wishes",
    /* gift */
    "gift-title":           "Wedding Gift",
    "gift-intro":           "Your prayers and blessings are a truly meaningful gift to us. And if giving is an expression of your love, you can give a cashless gift.",
    "copy":                 "Copy",
    "copied":               "✓ Copied",
    /* gallery */
    "gallery-title":        "Gallery",
    "gallery-loading":      "Loading gallery...",
    "gallery-empty":        "Gallery is being prepared 🤍",
    "gallery-error":        "Failed to load gallery. Please refresh the page.",
    /* footer */
    "footer-love":          "With love,",
    /* messages */
    "rsvp-sending":         "Sending...",
    "rsvp-success":         "Thank you for your prayers and attendance 🤍",
    "rsvp-error":           "An error occurred. Please try again.",
    "ucapan-empty":         "Be the first to share your wishes 🤍",
    /* validation */
    "validation-name":      "Please enter your name",
    "validation-category":  "Please select a category",
    "validation-attend":    "Please confirm your attendance",
  }

}

let currentLang = "id"

function applyLang(lang) {
  currentLang = lang
  const t = i18n[lang]

  // innerHTML elements
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n")
    if (t[key] !== undefined) el.innerHTML = t[key]
  })

  // placeholder elements
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    const key = el.getAttribute("data-i18n-ph")
    if (t[key] !== undefined) el.placeholder = t[key]
  })

  // active button state
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang)
  })

  document.documentElement.lang = lang
  
  // Update form validation messages
  updateFormValidation()
}

document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.onclick = () => applyLang(btn.dataset.lang)
})

applyLang("id")


/* ===============================
FORM VALIDATION
================================ */

function updateFormValidation() {
  const namaInput = document.getElementById("nama")
  const kategoriInput = document.getElementById("kategori")
  const kehadiranInput = document.getElementById("kehadiran")
  
  if (namaInput) {
    namaInput.oninvalid = () => {
      namaInput.setCustomValidity(i18n[currentLang]["validation-name"])
    }
    namaInput.oninput = () => {
      namaInput.setCustomValidity("")
    }
  }
  
  if (kategoriInput) {
    kategoriInput.oninvalid = () => {
      kategoriInput.setCustomValidity(i18n[currentLang]["validation-category"])
    }
    kategoriInput.onchange = () => {
      kategoriInput.setCustomValidity("")
    }
  }
  
  if (kehadiranInput) {
    kehadiranInput.oninvalid = () => {
      kehadiranInput.setCustomValidity(i18n[currentLang]["validation-attend"])
    }
    kehadiranInput.onchange = () => {
      kehadiranInput.setCustomValidity("")
    }
  }
}

window.addEventListener("load", updateFormValidation)


/* ===============================
GUEST AUTO DETECTION
================================ */

const params = new URLSearchParams(window.location.search)
const guestName = decodeURIComponent(params.get("to") || "")

const openingGuestEl = document.getElementById("openingGuest")
if (openingGuestEl) {
  openingGuestEl.innerText = guestName || "Tamu Undangan"
}

if (guestName) {
  const namaInput = document.getElementById("nama")
  if (namaInput) namaInput.value = guestName
}


/* ===============================
COUNTDOWN
================================ */

const targetDate = new Date("June 13, 2026 08:00:00").getTime()

function pad(n) {
  return String(n).padStart(2, "0")
}

function countdown() {
  const now = new Date().getTime()
  const d = targetDate - now

  if (d <= 0) {
    document.getElementById("days").textContent = "00"
    document.getElementById("hours").textContent = "00"
    document.getElementById("minutes").textContent = "00"
    document.getElementById("seconds").textContent = "00"
    return
  }

  const daysEl = document.getElementById("days")
  const hoursEl = document.getElementById("hours")
  const minutesEl = document.getElementById("minutes")
  const secondsEl = document.getElementById("seconds")

  if (daysEl) daysEl.textContent = pad(Math.floor(d / 86400000))
  if (hoursEl) hoursEl.textContent = pad(Math.floor(d / 3600000) % 24)
  if (minutesEl) minutesEl.textContent = pad(Math.floor(d / 60000) % 60)
  if (secondsEl) secondsEl.textContent = pad(Math.floor(d / 1000) % 60)
}

countdown()
setInterval(countdown, 1000)


/* ===============================
OPEN INVITATION
================================ */

const openBtn = document.getElementById("openBtn")
if (openBtn) {
  openBtn.onclick = () => {
    const bgMusic = document.getElementById("bgMusic")
    if (bgMusic) {
      bgMusic.play().catch(() => {})
    }

    window.scrollTo({ top: 0, behavior: "smooth" })

    const el = document.getElementById("opening")
    if (el) {
      el.style.opacity = "0"
      el.style.transform = "scale(1.05)"

      setTimeout(() => {
        el.style.display = "none"
      }, 900)
    }
  }
}


/* ===============================
MUSIC PLAYER
================================ */

const bgMusic = document.getElementById("bgMusic")
const musicToggle = document.getElementById("musicToggle")
const musicBar = document.getElementById("musicBar")

if (musicToggle && bgMusic) {
  musicToggle.addEventListener("click", () => {
    if (bgMusic.paused) {
      bgMusic.play().then(() => {
        musicToggle.innerHTML = "⏸"
        if (musicBar) musicBar.classList.remove("paused")
      }).catch(() => {})
    } else {
      bgMusic.pause()
      musicToggle.innerHTML = "▶"
      if (musicBar) musicBar.classList.add("paused")
    }
  })

  // Update music player state when music plays/pauses
  bgMusic.addEventListener("play", () => {
    musicToggle.innerHTML = "⏸"
    if (musicBar) musicBar.classList.remove("paused")
  })

  bgMusic.addEventListener("pause", () => {
    musicToggle.innerHTML = "▶"
    if (musicBar) musicBar.classList.add("paused")
  })
}


/* ===============================
COPY BANK ACCOUNT
================================ */

function copyAccount(btn, number) {
  navigator.clipboard.writeText(number).catch(() => {
    // fallback
    const ta = document.createElement("textarea")
    ta.value = number
    ta.style.position = "fixed"
    ta.style.opacity = "0"
    document.body.appendChild(ta)
    ta.select()
    document.execCommand("copy")
    ta.remove()
  })
  
  const originalText = btn.innerText
  btn.innerText = i18n[currentLang]["copied"]
  btn.classList.add("copied")
  
  setTimeout(() => {
    btn.innerText = i18n[currentLang]["copy"]
    btn.classList.remove("copied")
  }, 2200)
}

window.copyAccount = copyAccount


/* ===============================
RSVP SUBMIT
================================ */

const rsvpForm = document.getElementById("rsvpForm")
if (rsvpForm) {
  rsvpForm.addEventListener("submit", async e => {
    e.preventDefault()

    const data = {
      nama: document.getElementById("nama").value,
      kategori: document.getElementById("kategori").value,
      kehadiran: document.getElementById("kehadiran").value,
      ucapan: document.getElementById("ucapan").value
    }

    const msg = document.getElementById("formMessage")
    const submitBtn = e.target.querySelector(".submit-btn")

    msg.innerText = i18n[currentLang]["rsvp-sending"]
    submitBtn.disabled = true
    submitBtn.style.opacity = "0.5"

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(data)
      })

      if (!response.ok) throw new Error("Network response was not ok")

      msg.innerText = i18n[currentLang]["rsvp-success"]
      msg.style.color = "var(--green-sage)"

      e.target.reset()

      if (guestName) {
        document.getElementById("nama").value = guestName
      }

      loadUcapan()

    } catch (error) {
      console.error("RSVP error:", error)
      msg.innerText = i18n[currentLang]["rsvp-error"]
      msg.style.color = "var(--red)"
    } finally {
      submitBtn.disabled = false
      submitBtn.style.opacity = "1"
    }
  })
}


/* ===============================
MESSAGE BOARD
================================ */

async function loadUcapan() {
  try {
    const res = await fetch(scriptURL)

    if (!res.ok) throw new Error("Failed to fetch")

    const data = await res.json()
    const box = document.getElementById("ucapanList")

    if (!box) return

    box.innerHTML = ""

    const items = data.reverse().slice(0, 50).filter(i => i.Nama && i.Ucapan)
    
    if (!items.length) {
      box.innerHTML = `<p style="text-align:center;font-style:italic;font-size:.9rem;color:#9a7050;padding:16px 0;">${i18n[currentLang]["ucapan-empty"]}</p>`
      return
    }
    
    items.forEach(item => {
      const div = document.createElement("div")
      div.className = "ucapan-item"
      div.setAttribute("role", "listitem")

      div.innerHTML = `
        <strong>${item.Nama}${item.Kategori ? " · " + item.Kategori : ""}</strong>
        <p>${item.Ucapan}</p>
        <span class="badge ${item.Kehadiran === "Hadir" ? "hadir" : "tidak"}">${item.Kehadiran}</span>
      `

      box.appendChild(div)
    })

  } catch (e) {
    console.error("Load ucapan error:", e)
  }
}

window.addEventListener("load", loadUcapan)

// Auto-refresh ucapan setiap 30 detik
setInterval(loadUcapan, 30000)


/* ===============================
SCROLL REVEAL
================================ */

function reveal() {
  const h = window.innerHeight

  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < h - 70) {
      el.classList.add("active")
    }
  })
}

// Use debounce untuk optimasi performa
window.addEventListener("scroll", debounce(reveal, 100))
window.addEventListener("load", reveal)


/* ===============================
PARALLAX HEADER
================================ */

function parallaxHeader() {
  const illustration = document.querySelector(".top-illustration")
  if (illustration) {
    const scrolled = window.pageYOffset
    illustration.style.transform = `translateY(${scrolled * 0.3}px)`
  }
}

window.addEventListener("scroll", debounce(parallaxHeader, 16))


/* ===============================
GALLERY FROM GOOGLE DRIVE
================================ */

async function loadGallery() {
  const track = document.getElementById("galleryTrack")

  if (!track) return

  // Show loading state
  track.innerHTML = `<p style="text-align:center;padding:40px;color:var(--brown);font-style:italic;">${i18n[currentLang]["gallery-loading"]}</p>`

  try {
    const res = await fetch(scriptURL + "?action=gallery")

    if (!res.ok) throw new Error("Gallery fetch failed")

    const images = await res.json()

    if (!images || images.length === 0) {
      track.innerHTML = `<p style="text-align:center;padding:40px;color:var(--brown);font-style:italic;">${i18n[currentLang]["gallery-empty"]}</p>`
      return
    }

    // Clear loading state
    track.innerHTML = ""

    // Sort images by numeric filename (1.jpg, 2.jpg, 3.jpg, etc.)
    images.sort((a, b) => {
      const numA = parseInt(a.match(/(\d+)\./)?.[1] || "0")
      const numB = parseInt(b.match(/(\d+)\./)?.[1] || "0")
      return numA - numB
    })

    images.forEach((src, index) => {
      const slide = document.createElement("div")
      slide.className = "photo-slide"
      slide.setAttribute("role", "listitem")

      const img = document.createElement("img")
      img.src = src
      img.loading = "lazy"
      img.alt = `Gallery photo ${index + 1}`

      slide.appendChild(img)
      track.appendChild(slide)
    })

    setTimeout(initLightbox, 300)

  } catch (e) {
    console.error("Gallery load error", e)
    track.innerHTML = `<p style="text-align:center;padding:40px;color:var(--red);font-style:italic;">${i18n[currentLang]["gallery-error"]}</p>`
  }
}

window.addEventListener("load", loadGallery)


/* ===============================
ADD TO CALENDAR
================================ */

function initCalendar() {
  const btn = document.getElementById("calendarBtn")

  if (!btn) return

  const start = "20260613T010000Z"
  const end = "20260613T070000Z"

  const title = encodeURIComponent("Pernikahan Khansa & Fikri")
  const loc = encodeURIComponent("Depok, Jawa Barat")

  btn.href =
    `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&location=${loc}`
}

window.addEventListener("load", initCalendar)


/* ===============================
GALLERY LIGHTBOX
================================ */

let galleryImages = []
let currentIndex = 0
let startX = 0
let scale = 1

document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox")
  const lightboxImg = document.getElementById("lightboxImg")
  const btnClose = document.getElementById("lightboxClose")
  const btnNext = document.getElementById("lightboxNext")
  const btnPrev = document.getElementById("lightboxPrev")

  if (!lightbox || !lightboxImg || !btnClose || !btnNext || !btnPrev) return

  btnClose.addEventListener("click", closeLightbox)
  btnNext.addEventListener("click", nextImage)
  btnPrev.addEventListener("click", prevImage)

  document.addEventListener("keydown", e => {
    if (!lightbox.classList.contains("active")) return

    if (e.key === "ArrowRight") nextImage()
    if (e.key === "ArrowLeft") prevImage()
    if (e.key === "Escape") closeLightbox()
  })

  lightbox.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX
  })

  lightbox.addEventListener("touchend", e => {
    let endX = e.changedTouches[0].clientX

    if (startX - endX > 50) nextImage()
    if (endX - startX > 50) prevImage()
  })

  lightboxImg.addEventListener("wheel", e => {
    e.preventDefault()

    scale += e.deltaY * -0.001
    scale = Math.min(Math.max(.8, scale), 4)

    lightboxImg.style.transform = `scale(${scale})`
  })
})

function initLightbox() {
  const slides = document.querySelectorAll(".photo-slide img")

  galleryImages = [...slides].map(img => img.src)

  slides.forEach((img, i) => {
    img.addEventListener("click", () => openLightbox(i))
    img.style.cursor = "pointer"
  })
}

function openLightbox(i) {
  currentIndex = i

  const lightbox = document.getElementById("lightbox")
  const lightboxImg = document.getElementById("lightboxImg")

  if (!lightbox || !lightboxImg) return

  lightboxImg.src = galleryImages[i]
  scale = 1
  lightboxImg.style.transform = `scale(1)`

  lightbox.classList.add("active")
  document.body.style.overflow = "hidden"
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox")
  if (!lightbox) return

  lightbox.classList.remove("active")
  document.body.style.overflow = ""
  
  scale = 1
  const lightboxImg = document.getElementById("lightboxImg")
  if (lightboxImg) {
    lightboxImg.style.transform = `scale(1)`
  }
}

function nextImage() {
  currentIndex = (currentIndex + 1) % galleryImages.length
  const lightboxImg = document.getElementById("lightboxImg")
  if (lightboxImg) {
    lightboxImg.src = galleryImages[currentIndex]
    scale = 1
    lightboxImg.style.transform = `scale(1)`
  }
}

function prevImage() {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length
  const lightboxImg = document.getElementById("lightboxImg")
  if (lightboxImg) {
    lightboxImg.src = galleryImages[currentIndex]
    scale = 1
    lightboxImg.style.transform = `scale(1)`
  }
}
