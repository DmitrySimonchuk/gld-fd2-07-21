export function ThemeSwitcher() {
    const div = document.createElement('div');

    div.innerHTML = `<div class="form-check form-switch">
    <label class="form-check-label" for="themeSwitcher">Day</label>
    <input class="form-check-input" type="checkbox" id="themeSwitcher" checked>
    <label class="form-check-label" for="themeSwitcher">Night</label> 
    </div> `;

    if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', 'dark');
    }

    const switcher = div.querySelector('#themeSwitcher');

    switcher.addEventListener('click', changeTheme);

    return div;
}

function changeTheme({
    target: {
        checked
    }
}) {

}