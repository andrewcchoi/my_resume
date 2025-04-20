const progressBar = document.querySelector("#progress-bar");
const body = document.querySelector("body");

const animateProgressBar = () =>{
    let scrollDistance = document.body.scrollTop || document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let progressWidth = Math.floor((scrollDistance / scrollHeight) * 100);

    progressBar.style.width = progressWidth + "%";}

window.addEventListener("scroll", animateProgressBar);
