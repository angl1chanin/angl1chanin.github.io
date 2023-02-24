const ACTIVE_THEME = localStorage.getItem('theme');
let switcher = document.getElementById('theme__checkbox');

function switchTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark');
        localStorage.setItem('theme', theme);
    } else if (theme === 'light') {
        document.body.classList.remove('dark');
        localStorage.setItem('theme', theme);
    }
}

switcher.addEventListener('click', () => {
    switcher.checked ? switchTheme('dark') : switchTheme('light');
})

ACTIVE_THEME === null ? switchTheme('light') : switchTheme(ACTIVE_THEME);
