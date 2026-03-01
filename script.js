const scriptURL="https://script.google.com/macros/s/AKfycbxzaoGM7qpX3q1kvsCzvgUU1NV4oe6BBksLsdEW49DoMB5nCiTj8ycMVVBUMpybgYA1/exec";

/* =========================
   PERSONAL GREETING
========================= */

const params=new URLSearchParams(window.location.search);
const guestName=params.get("to");

document.getElementById("openingGuest").innerText=guestName||"Tamu Undangan";
if(guestName)document.getElementById("nama").value=guestName;

/* =========================
   COUNTDOWN
========================= */

const targetDate=new Date("June 13, 2026 08:00:00").getTime();

setInterval(()=>{
const now=new Date().getTime();
const distance=targetDate-now;
if(distance>0){
document.getElementById("days").innerText=Math.floor(distance/(1000*60*60*24));
document.getElementById("hours").innerText=Math.floor((distance/(1000*60*60))%24);
document.getElementById("minutes").innerText=Math.floor((distance/(1000*60))%60);
document.getElementById("seconds").innerText=Math.floor((distance/1000)%60);
}
},1000);

/* =========================
   OPENING
========================= */

document.getElementById("openBtn").addEventListener("click",()=>{
document.getElementById("bgMusic").play();
document.getElementById("opening").style.opacity="0";
setTimeout(()=>{document.getElementById("opening").style.display="none"},800);
});

/* =========================
   SUBMIT RSVP
========================= */

document.getElementById("rsvpForm").addEventListener("submit",async(e)=>{
e.preventDefault();

const nama=document.getElementById("nama").value;
const kategori=document.getElementById("kategori").value;
const kehadiran=document.getElementById("kehadiran").value;
const ucapan=document.getElementById("ucapan").value;

const data={nama,kategori,kehadiran,ucapan};

document.getElementById("formMessage").innerText="Mengirim...";

try{
await fetch(scriptURL,{method:"POST",body:JSON.stringify(data)});
document.getElementById("formMessage").innerText="Terima kasih atas doa dan kehadirannya 🤍";
e.target.reset();
loadUcapan(true);
}catch{
document.getElementById("formMessage").innerText="Terjadi kesalahan.";
}
});

/* =========================
   LOAD MESSAGE BOARD
========================= */

async function loadUcapan(withAnimation=false){

try{
const response=await fetch(scriptURL);
const data=await response.json();

const container=document.getElementById("ucapanList");
container.innerHTML="";

data.reverse().slice(0,50).forEach((item,index)=>{

if(!item.Nama||!item.Ucapan)return;

const div=document.createElement("div");
div.classList.add("ucapan-item");

div.innerHTML=`
<strong>${item.Nama} - ${item.Kategori}</strong>
<p>"${item.Ucapan}"</p>
<span class="badge ${item.Kehadiran==="Hadir"?"hadir":"tidak"}">
${item.Kehadiran}
</span>
`;

container.appendChild(div);
});

}catch{
console.log("Gagal load ucapan");
}
}

window.addEventListener("load",()=>loadUcapan(false));

/* =========================
   SCROLL EFFECT
========================= */

const revealElements=document.querySelectorAll(".reveal");

function revealOnScroll(){
const windowHeight=window.innerHeight;
revealElements.forEach(el=>{
const elementTop=el.getBoundingClientRect().top;
if(elementTop<windowHeight-100){
el.classList.add("active");
}
});
}
window.addEventListener("scroll",revealOnScroll);
window.addEventListener("load",revealOnScroll);

window.addEventListener("scroll",()=>{
const scrollY=window.scrollY;
const hero=document.querySelector(".hero");
if(hero)hero.style.transform=`translateY(${scrollY*0.05}px)`;
if(scrollY>100){
document.body.classList.add("scrolled");
}else{
document.body.classList.remove("scrolled");
}
});