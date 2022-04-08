var audioOne = document.querySelector("#audio");
var audioTwo = document.querySelector("#audio_one");
var audioThree = document.querySelector("#audio_two");
var audioFour = document.querySelector("#audio_three");
var audioFive = document.querySelector("#audio_four");
var audioSix = document.querySelector("#audio_five");
var audioSeven = document.querySelector("#audio_six");

var allAudios = document.querySelectorAll("audio");

function stopAllAudio() {
    allAudios.forEach(function (audio) {
        audio.pause();
    });
}

function pauseAllAudio() {
    audioOne.pause();
    audioTwo.pause();
    audioThree.pause();
    audioFour.pause();
    audioFive.pause();
    audioSix.pause();
    audioSeven.pause();
}

document.querySelector("#play-1").addEventListener("click", function () {
    stopAllAudio();
    audioOne.play();
});
document.querySelector("#play-2").addEventListener("click", function () {
    stopAllAudio();
    audioTwo.play();
});
document.querySelector("#play-3").addEventListener("click", function () {
    stopAllAudio();
    audioThree.play();
});
document.querySelector("#play-4").addEventListener("click", function () {
    stopAllAudio();
    audioFour.play();
});
document.querySelector("#play-5").addEventListener("click", function () {
    stopAllAudio();
    audioFive.play();
});
document.querySelector("#play-6").addEventListener("click", function () {
    stopAllAudio();
    audioSix.play();
});
document.querySelector("#play-7").addEventListener("click", function () {
    stopAllAudio();
    audioSeven.play();
});
