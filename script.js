/* ===============================
   i18n LANGUAGE SYSTEM
================================ */

const i18n = {

id:{

"to":"Kepada Yth.",
"open":"✦ Buka Undangan ✦",

"verse":`"Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan dari jenismu sendiri agar kamu merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang."<br><em>(QS. Ar-Rum:21)</em>`,

"daughter":"Putri dari Bapak & Ibu",
"son":"Putra dari Bapak & Ibu",

"getting-married":"We Are Getting Married",

"days":"Hari",
"hours":"Jam",
"minutes":"Menit",
"seconds":"Detik",

"event-title":"Rangkaian Acara",
"event-name":"Akad Nikah & Resepsi",
"event-date":"Sabtu, 13 Juni 2026",
"event-time":"08.00 WIB — Selesai",

"location-title":"Lokasi",

"rsvp-title":"RSVP",

"form-name":"Nama Lengkap",
"form-category":"Kategori",
"form-attend":"Kesediaan Hadir",
"form-wishes":"Doa & Ucapan",

"gift-title":"Wedding Gift",

"gallery-title":"Galeri",

"save-calendar":"Simpan ke Kalender",

"copy":"Salin",
"copied":"✓ Tersalin",

"rsvp-sending":"Mengirim...",
"rsvp-success":"Terima kasih atas doa dan kehadirannya 🤍",
"rsvp-error":"Terjadi kesalahan. Mohon coba lagi.",

"ucapan-empty":"Jadilah yang pertama memberikan ucapan 🤍"

},

en:{

"to":"Dear",
"open":"✦ Open Invitation ✦",

"verse":`"And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy."<br><em>(QS. Ar-Rum:21)</em>`,

"daughter":"Daughter of Mr. & Mrs.",
"son":"Son of Mr. & Mrs.",

"getting-married":"We Are Getting Married",

"days":"Days",
"hours":"Hours",
"minutes":"Minutes",
"seconds":"Seconds",

"event-title":"Event Schedule",
"event-name":"Marriage Ceremony & Reception",
"event-date":"Saturday, June 13 2026",
"event-time":"08.00 WIB — Finished",

"location-title":"Location",

"rsvp-title":"RSVP",

"form-name":"Full Name",
"form-category":"Category",
"form-attend":"Attendance",
"form-wishes":"Prayer & Wishes",

"gift-title":"Wedding Gift",

"gallery-title":"Gallery",

"save-calendar":"Save to Calendar",

"copy":"Copy",
"copied":"✓ Copied",

"rsvp-sending":"Sending...",
"rsvp-success":"Thank you for your prayers 🤍",
"rsvp-error":"Error occurred. Please try again.",

"ucapan-empty":"Be the first to send wishes 🤍"

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

document.documentElement.lang=lang

}

document.querySelectorAll(".lang-btn").forEach(btn=>{
btn.addEventListener("click",()=>applyLang(btn.dataset.lang))
})

applyLang("id")


/* ===============================
   GOOGLE SCRIPT URL
================================ */

const scriptURL="https://script.google.com/macros/s/AKfycbxzaoGM7qpX3q1kvsCzvgUU1NV4oe6BBksLsdEW49DoMB5nCiTj8ycMVVBUMpybgYA1/exec"


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

const target=new Date("June 13, 2026 08:00:00").getTime()

function pad(n){
return String(n).padStart(2,"0")
}

function tick(){

const d=target-Date.now()

if(d<=0)return

document.getElementById("days").textContent=
pad(Math.floor(d/86400000))

document.getElementById("hours").textContent=
pad(Math.floor(d/3600000)%24)

document.getElementById("minutes").textContent=
pad(Math.floor(d/60000)%60)

document.getElementById("seconds").textContent=
pad(Math.floor(d/1000)%60)

}

tick()
setInterval(tick,1000)


/* ===============================
   OPEN INVITATION
================================ */

document.getElementById("openBtn").addEventListener("click",()=>{

document.getElementById("bgMusic").play().catch(()=>{})

setTimeout(()=>{
window.scrollTo({top:0,behavior:"smooth"})
},300)

burstConfetti()

const el=document.getElementById("opening")

el.style.opacity="0"
el.style.transform="scale(1.05)"

setTimeout(()=>{
el.style.display="none"
},1000)

})


/* ===============================
   CONFETTI BURST
================================ */

function burstConfetti(){

const colors=["#c0392b","#e2b86a","#f2c5bc","#c8943a","#8fa882"]

const cx=window.innerWidth/2
const cy=window.innerHeight/2

for(let i=0;i<80;i++){

const el=document.createElement("div")

el.className="confetti-piece"

const angle=Math.random()*360*Math.PI/180
const dist=Math.random()*300

const tx=Math.cos(angle)*dist
const ty=Math.sin(angle)*dist

el.style.cssText=`
left:${cx}px;
top:${cy}px;
--tx:${tx}px;
--ty:${ty}px;
background:${colors[Math.floor(Math.random()*colors.length)]};
`

document.body.appendChild(el)

setTimeout(()=>el.remove(),1500)

}

}


/* ===============================
   COPY ACCOUNT
================================ */

function copyAccount(btn,number){

navigator.clipboard.writeText(number)

const txt=btn.innerText

btn.innerText=i18n[currentLang].copied

setTimeout(()=>{
btn.innerText=i18n[currentLang].copy
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
   LOAD MESSAGE BOARD
================================ */

async function loadUcapan(){

try{

const res=await fetch(scriptURL)

const data=await res.json()

const box=document.getElementById("ucapanList")

box.innerHTML=""

const items=data.reverse().slice(0,50)

if(!items.length){

box.innerHTML=`<p style="text-align:center;font-style:italic;">${i18n[currentLang]["ucapan-empty"]}</p>`

return

}

items.forEach(item=>{

const div=document.createElement("div")

div.className="ucapan-item"

div.innerHTML=`

<strong>${item.Nama}${item.Kategori?" · "+item.Kategori:""}</strong>

<p>${item.Ucapan}</p>

<span class="badge ${item.Kehadiran==="Hadir"?"hadir":"tidak"}">
${item.Kehadiran}
</span>

`

box.appendChild(div)

})

}catch{}

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
   GALLERY CAROUSEL
================================ */

function initCarousel(){

const track=document.querySelector(".carousel-track")

if(!track)return

track.addEventListener("wheel",e=>{

e.preventDefault()

track.scrollLeft+=e.deltaY

})

}

window.addEventListener("load",initCarousel)


/* ===============================
   ADD TO CALENDAR
================================ */

function initCalendar(){

const btn=document.getElementById("calendarBtn")

if(!btn)return

const start="20260613T010000Z"
const end="20260613T070000Z"

const title=encodeURIComponent("Pernikahan Khansa & Fikri")

const loc=encodeURIComponent("Depok, Jawa Barat")

const url=
`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&location=${loc}`

btn.href=url

}

window.addEventListener("load",initCalendar)


/* ===============================
   MUSIC PLAYER
================================ */

function initMusicPlayer(){

const btn=document.getElementById("musicBtn")

const audio=document.getElementById("bgMusic")

if(!btn)return

btn.addEventListener("click",()=>{

if(audio.paused){

audio.play()

btn.textContent="❚❚"

}else{

audio.pause()

btn.textContent="▶"

}

})

}

window.addEventListener("load",initMusicPlayer)