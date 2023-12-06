
let mute = document.querySelector(".mute");
mute.onclick = () => {
    mute.classList.toggle("active");
    if (playMuteVideo.muted == true) {
        playMuteVideo.muted = false;
    } else {
        playMuteVideo.muted = true;
    }
};
let play = document.querySelector(".play");
play.onclick = () => {
    play.classList.toggle("active");
    centerPlayPause.classList.toggle("active");
};
let centerPlayPause = document.querySelector(".centerPlayPause");
centerPlayPause.onclick = () => {
    centerPlayPause.classList.toggle("active");
    play.classList.toggle("active");
};
let first = document.querySelector(".first");
let second = document.querySelector(".second");
centerPlayPause.addEventListener("click", () => {
    if (first.classList.contains("active")) {
        first.classList.remove("active");
        second.classList.add("active");
    } else {
        first.classList.add("active");
        second.classList.remove("active");
    }
});
play.addEventListener("click", playPause);
centerPlayPause.addEventListener("click", playPause);
function playPause() {
    if (playMuteVideo.paused) {
        playMuteVideo.play();
    } else {
        playMuteVideo.pause();
    }
}
let thumbsUp = document.querySelector(".thumbsUp");
let thumbsDown = document.querySelector(".thumbsDown");

thumbsUp.addEventListener("click", likeDislike);
thumbsDown.addEventListener("click", likeDislike);
function likeDislike() {
    if (thumbsUp.classList.contains("active")) {
        thumbsUp.classList.remove("active");
        thumbsDown.classList.add("active");
    } else {
        thumbsUp.classList.add("active");
        thumbsDown.classList.remove("active");
    }
}
