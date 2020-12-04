const sidepane = document.querySelector(".sidepane");
sidepane.classList.remove("expanded");

document.querySelector(".burger").addEventListener('click',()=>{
    const top = document.querySelector("#top");
    const middle = document.querySelector("#middle");
    const bottom = document.querySelector("#bottom");
    const sidepane = document.querySelector(".sidepane");

    sidepane.classList.toggle("expanded");
    top.classList.toggle("top");
    middle.classList.toggle("middle");
    bottom.classList.toggle("bottom");
})

