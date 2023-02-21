let anchorLinks = document.querySelectorAll('.nav__link');
anchorLinks.forEach(link => {
    link.addEventListener('click', function() {
        const section = link.getAttribute('href').replace('#', '');
        fullpage_api.moveTo(section, 1);
    });
});
