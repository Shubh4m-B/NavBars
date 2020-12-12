const icon=document.querySelector("i");
const sidepane=document.querySelector(".sidepane");

icon.addEventListener('click',()=>{
    icon.classList.toggle("rotated");
    sidepane.classList.toggle("expanded");
})