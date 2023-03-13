(function () {
    new fullpage('#fullpage', {
        licenseKey: 'gplv3-license',
        autoScrolling: true,
        animateAnchor: true,
        slidesNavigation: true,
        anchors: ['home', 'about', 'portfolio', 'skills', 'contact'],
        onLeave: function (section, origin) {
            /* 
            Make the return to home button available
            */
            if (section.index === 0) {
                let returnBtn = document.querySelector('.return-button');
                returnBtn.style.bottom = '3rem';
            } else if (origin.index === 0) {
            /*
            Code below hide return button if section is already 'home'
            */
                let returnBtn = document.querySelector('.return-button');
                returnBtn.style.bottom = '-10rem';
            }
        },
    });

    /*
    Here the realise of work of return button.
    It will move to 'home' section on click
    */
    let returnBtn = document.querySelector('.return-button');
    returnBtn.addEventListener('click', () => {
        fullpage_api.moveTo('home', 1);
    });

    /* 
    This code below remove watermark of fullpage.js library.
    */
    document.querySelector('.fp-watermark').remove();

    /*
    Code below lock body for scrolling if nav menu is open
    */
    const navBtn = document.querySelector('.nav__button');
    navBtn.addEventListener('click', function () {
        fullpage_api.setAllowScrolling(false);
    });

    /*
    It's for navigation buttons work, because default anchors of fullpage.js
    doesn't work with it. So, this code solve this problem just getting anchor
    from the nav button link and using fullpage_api to move there.
    */
    let anchorLinks = document.querySelectorAll('.nav__link');
    anchorLinks.forEach((link) => {
        /* Go through each link from header */
        link.addEventListener('click', function () {
            /* Clear the link from hashtag */
            const section = link.getAttribute('href').replace('#', '');
            fullpage_api.moveTo(section, 1);
        });
    });
})();
