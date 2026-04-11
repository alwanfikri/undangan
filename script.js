/* ===============================
CONFIG
================================ */

const scriptURL =
"https://script.google.com/macros/s/AKfycbxzaoGM7qpX3q1kvsCzvgUU1NV4oe6BBksLsdEW49DoMB5nCiTj8ycMVVBUMpybgYA1/exec"


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
    "event-time1":           "07.30 WIB — 09.00",
    "event-time2":           "11.00 WIB — 13.00",
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
    "gift-intro":           "Tanpa mengurangi rasa hormat, bagi tamu yang ingin memberikan hadiah kepada kami, dapat melalui nomor rekening berikut.",
    "copy":                 "Salin",
    "copied":               "✓ Tersalin",
    /* gallery */
    "gallery-title":        "Galeri",
    /* footer */
    "footer-love":          "With love,",
    /* messages */
    "rsvp-sending":         "Mengirim...",
    "rsvp-success":         "Terima kasih atas doa dan kehadirannya 🤍",
    "rsvp-error":           "Terjadi kesalahan. Mohon coba lagi.",
    "ucapan-empty":         "Jadilah yang pertama memberikan ucapan 🤍",
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
    "event-time1":           "07.30 WIB — 09.00",
    "event-time2":           "11.00 WIB — 13.00",
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
    "gift-intro":           "Without diminishing our respect, for guests who wish to give a gift, you may transfer to the following bank accounts.",
    "copy":                 "Copy",
    "copied":               "✓ Copied",
    /* gallery */
    "gallery-title":        "Gallery",
    /* footer */
    "footer-love":          "With love,",
    /* messages */
    "rsvp-sending":         "Sending...",
    "rsvp-success":         "Thank you for your prayers and attendance 🤍",
    "rsvp-error":           "An error occurred. Please try again.",
    "ucapan-empty":         "Be the first to share your wishes 🤍",
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
}

document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.onclick = () => applyLang(btn.dataset.lang)
})

applyLang("id")





/* ===============================
GUEST AUTO DETECTION
================================ */

const params=new URLSearchParams(window.location.search)

const guestName=decodeURIComponent(params.get("to")||"")

document.getElementById("openingGuest").innerText=
guestName||"Tamu Undangan"

if(guestName){
document.getElementById("nama").value=guestName
}


/* ===============================
COUNTDOWN
================================ */

const targetDate=new Date("June 13, 2026 08:00:00").getTime()

function pad(n){
return String(n).padStart(2,"0")
}

function countdown(){

const now=new Date().getTime()

const d=targetDate-now

if(d<=0) return

document.getElementById("days").textContent=
pad(Math.floor(d/86400000))

document.getElementById("hours").textContent=
pad(Math.floor(d/3600000)%24)

document.getElementById("minutes").textContent=
pad(Math.floor(d/60000)%60)

document.getElementById("seconds").textContent=
pad(Math.floor(d/1000)%60)

}

countdown()
setInterval(countdown,1000)


/* ===============================
OPEN INVITATION
================================ */

document.getElementById("openBtn").onclick=()=>{

document.getElementById("bgMusic").play().catch(()=>{})

window.scrollTo({top:0,behavior:"smooth"})

const el=document.getElementById("opening")

el.style.opacity="0"
el.style.transform="scale(1.05)"

setTimeout(()=>{
el.style.display="none"
},900)

}


/* ===============================
COPY BANK ACCOUNT
================================ */

function copyAccount(btn, number) {
  const orig = btn.innerText
  navigator.clipboard.writeText(number).catch(() => {
    // fallback
    const ta = document.createElement("textarea")
    ta.value = number
    document.body.appendChild(ta)
    ta.select()
    document.execCommand("copy")
    ta.remove()
  })
  btn.innerText = i18n[currentLang]["copied"]
  btn.classList.add("copied")
  setTimeout(() => {
    btn.innerText = i18n[currentLang]["copy"]
    btn.classList.remove("copied")
  }, 2200)
}

window.copyAccount=copyAccount


/* ===============================
RSVP SUBMIT
================================ */

document.getElementById("rsvpForm").addEventListener("submit",async e=>{

e.preventDefault()

const data={

nama:document.getElementById("nama").value,
kategori:document.getElementById("kategori").value,
kehadiran:document.getElementById("kehadiran").value,
ucapan:document.getElementById("ucapan").value

}

const msg=document.getElementById("formMessage")

msg.innerText=i18n[currentLang]["rsvp-sending"]

try{

await fetch(scriptURL,{
method:"POST",
body:JSON.stringify(data)
})

msg.innerText=i18n[currentLang]["rsvp-success"]

e.target.reset()

if(guestName){
document.getElementById("nama").value=guestName
}

loadUcapan()

}catch{

msg.innerText=i18n[currentLang]["rsvp-error"]

}

})


/* ===============================
MESSAGE BOARD
================================ */

async function loadUcapan(){

try{

const res=await fetch(scriptURL)

const data=await res.json()

const box=document.getElementById("ucapanList")

box.innerHTML=""

const items = data.reverse().slice(0,50).filter(i => i.Nama && i.Ucapan)
if (!items.length) {
  box.innerHTML = `<p style="text-align:center;font-style:italic;font-size:.9rem;color:#9a7050;padding:16px 0;">${i18n[currentLang]["ucapan-empty"]}</p>`
  return
}
items.forEach(item=>{

const div=document.createElement("div")

div.className="ucapan-item"

div.innerHTML=`
<strong>${item.Nama}${item.Kategori?" · "+item.Kategori:""}</strong>
<p>${item.Ucapan}</p>
<span class="badge ${item.Kehadiran==="Hadir"?"hadir":"tidak"}">${item.Kehadiran}</span>
`

box.appendChild(div)

})

}catch(e){

console.error(e)

}

}

window.addEventListener("load",loadUcapan)


/* ===============================
SCROLL REVEAL
================================ */

function reveal(){

const h=window.innerHeight

document.querySelectorAll(".reveal").forEach(el=>{

if(el.getBoundingClientRect().top<h-70){
el.classList.add("active")
}

})

}

window.addEventListener("scroll",reveal)
window.addEventListener("load",reveal)


/* ===============================
GALLERY FROM GOOGLE DRIVE
================================ */

async function loadGallery(){

const track=document.getElementById("galleryTrack")

if(!track) return

try{

const res=await fetch(scriptURL+"?action=gallery")

let images=await res.json()

/* SORT NUMERIC (1,2,3,10,11...) */

images = images.sort((a,b)=>{
return a.localeCompare(b,undefined,{numeric:true,sensitivity:'base'})
})

images.forEach(src=>{

const slide=document.createElement("div")

slide.className="photo-slide"

const img=document.createElement("img")

img.src=src
img.loading="lazy"
img.alt="Gallery photo"

slide.appendChild(img)

track.appendChild(slide)

})

}catch(e){

console.error("Gallery load error",e)

}

setTimeout(initLightbox,300)

}

setTimeout(initLightbox,300)

}

window.addEventListener("load",loadGallery)


/* ===============================
ADD TO CALENDAR
================================ */

function initCalendar(){

const btn=document.getElementById("calendarBtn")

if(!btn) return

const start="20260613T010000Z"
const end="20260613T070000Z"

const title=encodeURIComponent("Pernikahan Khansa & Fikri")
const loc=encodeURIComponent("Depok, Jawa Barat")

btn.href=
`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&location=${loc}`

}

window.addEventListener("load",initCalendar)


/* ===============================
GALLERY LIGHTBOX
================================ */

let galleryImages=[]
let currentIndex=0
let startX=0
let scale=1

document.addEventListener("DOMContentLoaded",()=>{

const lightbox=document.getElementById("lightbox")
const lightboxImg=document.getElementById("lightboxImg")
const btnClose=document.getElementById("lightboxClose")
const btnNext=document.getElementById("lightboxNext")
const btnPrev=document.getElementById("lightboxPrev")

btnClose.addEventListener("click",closeLightbox)
btnNext.addEventListener("click",nextImage)
btnPrev.addEventListener("click",prevImage)

document.addEventListener("keydown",e=>{

if(!lightbox.classList.contains("active")) return

if(e.key==="ArrowRight") nextImage()
if(e.key==="ArrowLeft") prevImage()
if(e.key==="Escape") closeLightbox()

})

lightbox.addEventListener("touchstart",e=>{
startX=e.touches[0].clientX
})

lightbox.addEventListener("touchend",e=>{

let endX=e.changedTouches[0].clientX

if(startX-endX>50) nextImage()
if(endX-startX>50) prevImage()

})

lightboxImg.addEventListener("wheel",e=>{

e.preventDefault()

scale+=e.deltaY*-0.001
scale=Math.min(Math.max(.8,scale),4)

lightboxImg.style.transform=`scale(${scale})`

})

})

function initLightbox(){

const slides=document.querySelectorAll(".photo-slide img")

galleryImages=[...slides].map(img=>img.src)

slides.forEach((img,i)=>{
img.addEventListener("click",()=>openLightbox(i))
})

}

function openLightbox(i){

currentIndex=i

const lightbox=document.getElementById("lightbox")
const lightboxImg=document.getElementById("lightboxImg")

lightboxImg.src=galleryImages[i]

lightbox.classList.add("active")

}

function closeLightbox(){

document.getElementById("lightbox").classList.remove("active")

}

function nextImage(){

currentIndex=(currentIndex+1)%galleryImages.length
document.getElementById("lightboxImg").src=galleryImages[currentIndex]

}

function prevImage(){

currentIndex=(currentIndex-1+galleryImages.length)%galleryImages.length
document.getElementById("lightboxImg").src=galleryImages[currentIndex]

}
