/* ===============================
   CONFIG
================================ */

const scriptURL =
"https://script.google.com/macros/s/AKfycbxzaoGM7qpX3q1kvsCzvgUU1NV4oe6BBksLsdEW49DoMB5nCiTj8ycMVVBUMpybgYA1/exec"


/* ===============================
   LANGUAGE SYSTEM
================================ */

const i18n={

id:{
"to":"Kepada Yth.",
"open":"✦ Buka Undangan ✦",
"getting-married":"Kami Akan Menikah",
"days":"Hari",
"hours":"Jam",
"minutes":"Menit",
"seconds":"Detik",
"event-title":"Rangkaian Acara",
"location-title":"Lokasi",
"rsvp-title":"RSVP",
"gift-title":"Hadiah Pernikahan",
"gallery-title":"Galeri",
"form-name":"Nama Lengkap",
"form-category":"Kategori",
"form-attend":"Kesediaan Hadir",
"form-wishes":"Doa & Ucapan",
"save-calendar":"Simpan ke Kalender",
"rsvp-sending":"Mengirim...",
"rsvp-success":"Terima kasih atas doa dan kehadirannya 🤍",
"rsvp-error":"Terjadi kesalahan. Mohon coba lagi."
},

en:{
"to":"Dear",
"open":"✦ Open Invitation ✦",
"getting-married":"We Are Getting Married",
"days":"Days",
"hours":"Hours",
"minutes":"Minutes",
"seconds":"Seconds",
"event-title":"Event Schedule",
"location-title":"Location",
"rsvp-title":"RSVP",
"gift-title":"Wedding Gift",
"gallery-title":"Gallery",
"form-name":"Full Name",
"form-category":"Category",
"form-attend":"Attendance",
"form-wishes":"Prayer & Wishes",
"save-calendar":"Save to Calendar",
"rsvp-sending":"Sending...",
"rsvp-success":"Thank you for your prayers 🤍",
"rsvp-error":"Error occurred"
}

}

let currentLang="id"

function applyLang(lang){

currentLang=lang

const t=i18n[lang]

document.querySelectorAll("[data-i18n]").forEach(el=>{
const key=el.getAttribute("data-i18n")
if(t[key]) el.innerHTML=t[key]
})

document.querySelectorAll(".lang-btn").forEach(btn=>{
btn.classList.toggle("active",btn.dataset.lang===lang)
})

}

document.querySelectorAll(".lang-btn").forEach(btn=>{
btn.onclick=()=>applyLang(btn.dataset.lang)
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

function copyAccount(btn,number){

navigator.clipboard.writeText(number)

btn.classList.add("copied")

setTimeout(()=>{
btn.classList.remove("copied")
},2000)

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

data.reverse().slice(0,50).forEach(item=>{

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

const images=await res.json()

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

/* keyboard navigation */

document.addEventListener("keydown",e=>{

if(!lightbox.classList.contains("active")) return

if(e.key==="ArrowRight") nextImage()
if(e.key==="ArrowLeft") prevImage()
if(e.key==="Escape") closeLightbox()

})

/* swipe support */

lightbox.addEventListener("touchstart",e=>{
startX=e.touches[0].clientX
})

lightbox.addEventListener("touchend",e=>{

let endX=e.changedTouches[0].clientX

if(startX-endX>50) nextImage()
if(endX-startX>50) prevImage()

})

/* zoom */

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

document.getElementById("lightbox")
.classList.remove("active")

}

function nextImage(){

currentIndex=(currentIndex+1)%galleryImages.length

document.getElementById("lightboxImg").src=
galleryImages[currentIndex]

}

function prevImage(){

currentIndex=(currentIndex-1+galleryImages.length)%galleryImages.length

document.getElementById("lightboxImg").src=
galleryImages[currentIndex]

}