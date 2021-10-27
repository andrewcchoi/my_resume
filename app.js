const progressBar = document.querySelector("#progress-bar");
const body = document.querySelector("body");

const animateProgressBar = () =>{
    let scrollOffset = document.documentElement.clientHeight - 80
    let scrollDistance = -body.getBoundingClientRect().top + scrollOffset;
    let scrollHeight = body.getBoundingClientRect().height;
    let progressWidth = Math.floor((scrollDistance / scrollHeight) * 100);

    progressBar.style.width = progressWidth + "%";
    if (progressWidth <= 23) {
        progressBar.style.width = "0%";
    }   
}

window.addEventListener("scroll", animateProgressBar);
