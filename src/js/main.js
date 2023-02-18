new fullpage('#fullpage', {
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: true,
});

document.querySelector(".fp-watermark").remove()

const navBtn = document.querySelector(".nav__button");

navBtn.onclick = function() {
    document.body.classList.toggle("locked");
}