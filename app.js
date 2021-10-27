const progressBar = document.querySelector("#progress-bar");
const body = document.querySelector("body");

const animateProgressBar = () =>{
    let scrollOffset = document.documentElement.clientHeight - 80
    let scrollDistance = -body.getBoundingClientRect().top + scrollOffset;
    let progressWidth = Math.floor((scrollDistance / scrollHeight) * 100);

    progressBar.style.width = progressWidth + "%";
    if (progressWidth <= 23) {
        progressBar.style.width = "0%";
    }
    
    console.log(scrollDistance, scrollHeight, progressWidth);
}

window.addEventListener("scroll", animateProgressBar);
