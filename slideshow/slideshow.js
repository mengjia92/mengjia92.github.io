let currImg = 0,
    isPlay = true,
    imgs = document.getElementsByClassName("slides"),
    imgBtns = document.getElementsByName("img_control"),
    imgInterval = setInterval(nextImg, 1000);

function prevImg() {
    currImg <= 0 ? currImg = imgs.length - 1 : currImg--;
    driveImg(currImg);
}

function nextImg() {
    currImg >= imgs.length - 1 ? currImg = 0 : currImg++;
    driveImg(currImg);
}

function driveImg(n) {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = "none";
    }
    for (let i = 0; i < imgBtns.length; i++) {
        imgBtns[i].classList.remove("active");
    }
    imgs[n].style.display = "block";
    imgBtns[n].classList.add("active");
}

function pauseSlider() {
    clearInterval(imgInterval);
    isPlay = false;
    document.querySelector(".pause_play").innerHTML = "PLAY";
}

function playSlider() {
    imgInterval = setInterval(nextImg, 1000);
    isPlay = true;
    document.querySelector(".pause_play").innerHTML = "PAUSE";
}

function sliderControl () {
    if (isPlay) {
        pauseSlider();
    } else {
        playSlider();
    }
}

currImg = -1;











