new fullpage('#fullpage', {
    licenseKey: 'gplv3-license',
    autoScrolling: true,
    animateAnchor: true,
    slidesNavigation: true,
    navigation: true,
    sectionsColors: ['#fff', '#fff', '#fff', '#fff', '#F6F7FF'],
    anchors: ['home', 'about', 'portfolio', 'skills', 'contact']
});

document.querySelector('.fp-watermark').remove();

const navBtn = document.querySelector('.nav__button');

navBtn.onclick = function () {
    document.body.classList.toggle('locked');
};