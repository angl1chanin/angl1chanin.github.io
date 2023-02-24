new fullpage('#fullpage', {
    licenseKey: 'gplv3-license',
    autoScrolling: true,
    animateAnchor: true,
    slidesNavigation: true,
    navigation: true,
    sectionsColors: ['#000', '#fff', '#fff', '#fff', '#F6F7FF'],
    anchors: ['home', 'about', 'portfolio', 'skills', 'contact'],
    onLeave: function (section, origin) {
        /* 
            It is the 'home' section. 
            Here just close the burger menu on leave if it was opened.
            Also, make the return to home button available
        */
        if (section.index === 0) {
            let burgerStatus = document.getElementById('nav-toggle');
            if (burgerStatus.checked) {
                burgerStatus.checked = false;
            }

            let returnBtn = document.querySelector('.return');
            returnBtn.style.bottom = '3rem';
        } 
        /*
            Code below hide return button if section is already 'home'
        */
        else if (origin.index === 0) {
            let returnBtn = document.querySelector('.return');
            returnBtn.style.bottom = '-10rem';
        }
        
    },
});

/*
    Here the realize of work of return button.
    It will move to 'home' section on click
*/
let returnBtn = document.querySelector('.return');
returnBtn.addEventListener('click', () => {
    fullpage_api.moveTo('home', 1);
})

/* 
    This code below remove watermark of fullpage.js library.
*/
document.querySelector('.fp-watermark').remove();
const navBtn = document.querySelector('.nav__button');
navBtn.onclick = function () {
    document.body.classList.toggle('locked');
};

/*
    It's for navigation buttons work, because default anchors of fullpage.js
    doesn't work with it. So, this code solve this problem just getting anchor
    from the nav button link and using fullpage_api to move there.
*/
let anchorLinks = document.querySelectorAll('.nav__link');
anchorLinks.forEach((link) => {
    link.addEventListener('click', function () {
        const section = link.getAttribute('href').replace('#', '');
        fullpage_api.moveTo(section, 1);
    });
});
