export function ThemeSwitcher() {
    const div = document.createElement('div');
    const theme = localStorage.getItem('theme');

    if (theme) {
        document.body.classList.add(`theme-${theme}`);
    } else {
        localStorage.setItem('theme', 'dark');
        document.body.classList.add(`theme-dark`);
    }

    div.innerHTML = `<div class="form-check form-switch">
    <label class="form-check-label" for="themeSwitcher">Day</label>
    <input class="form-check-input" type="checkbox" id="themeSwitcher" checked>
    <label class="form-check-label" for="themeSwitcher">Night</label> 
    </div> `;

    const switcher = div.querySelector('#themeSwitcher');

    switcher.addEventListener('click', changeTheme);
    
    if (theme && theme === 'light') {
        switcher.removeAttribute('checked');
    }    

    return div;
}

function changeTheme({
    target: {
        checked
    }
}) {
    if (checked) {
        localStorage.setItem('theme', 'dark');
        document.body.classList.add('theme-dark');
        document.body.classList.remove('theme-light');
    } else {
        localStorage.setItem('theme', 'light');
        document.body.classList.add('theme-light');
        document.body.classList.remove('theme-dark');
    };
}