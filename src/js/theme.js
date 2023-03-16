(function () {
    const BODY_CLASS = 'dark';
    const ACTIVE_THEME = localStorage.getItem('theme');
    let switcher = document.getElementById('theme__checkbox');

    function switchTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.add(BODY_CLASS);
            localStorage.setItem('theme', theme);
        } else if (theme === 'light') {
            document.body.classList.remove(BODY_CLASS);
            localStorage.setItem('theme', theme);
        }
    }

    switcher.addEventListener('click', () => {
        switcher.checked ? switchTheme('dark') : switchTheme('light');
    });

    window.onload = function () {
        if (ACTIVE_THEME === null) {
            switchTheme('light');
        } else if (ACTIVE_THEME === 'dark') {
            switchTheme('dark');
            switcher.checked = true;
        }
    };
})();
