const scriptURL="https://script.google.com/macros/s/AKfycbxzaoGM7qpX3q1kvsCzvgUU1NV4oe6BBksLsdEW49DoMB5nCiTj8ycMVVBUMpybgYA1/exec";

const params=new URLSearchParams(window.location.search);
const guestName=params.get("to");

document.getElementById("openingGuest").innerText=guestName||"Tamu Undangan";
if(guestName)document.getElementById("nama").value=guestName;

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

document.getElementById("openBtn").addEventListener("click",()=>{
document.getElementById("bgMusic").play();
document.getElementById("opening").style.opacity="0";
setTimeout(()=>{document.getElementById("opening").style.display="none"},800);
});

document.getElementById("rsvpForm").addEventListener("submit",async(e)=>{
e.preventDefault();
const data={
nama:document.getElementById("nama").value,
kehadiran:document.getElementById("kehadiran").value,
ucapan:document.getElementById("ucapan").value
};
document.getElementById("formMessage").innerText="Sending...";
try{
await fetch(scriptURL,{method:"POST",body:JSON.stringify(data)});
document.getElementById("formMessage").innerText="Thank you 🤍";
e.target.reset();
}catch{
document.getElementById("formMessage").innerText="Error.";
}
});

/* Scroll Reveal */
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

/* Parallax + Background Shift */
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