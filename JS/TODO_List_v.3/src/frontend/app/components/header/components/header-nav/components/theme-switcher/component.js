import {
    Icon,
    IconTypes
} from "../../../../../base";
import {
    changeTheme
} from "./helpers";
import styles from './styles.module.scss';

export function ThemeSwitcher() {
    const themeSwitcher = document.createElement('div');
    const theme = localStorage.getItem('theme');

    if (theme) {
        document.body.classList.add(`theme-${theme}`);
    } else {
        localStorage.setItem('theme', 'dark');
        document.body.classList.add(`theme-dark`);
    }

    const form = document.createElement('form');
    const labelDay = document.createElement('label');
    const divInput = document.createElement('div');
    const input = document.createElement('input');
    const labelNight = document.createElement('label');

    form.classList.add('form-check', 'form-switch', styles.form);
    labelDay.classList.add('form-check-label', styles.label);
    input.classList.add('form-check-input', styles.input);
    labelNight.classList.add('form-check-label');

    labelDay.setAttribute('for', 'themeSwitcher');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', 'themeSwitcher');
    input.setAttribute('checked', '');
    labelNight.setAttribute('for', 'themeSwitcher');

    labelDay.append(Icon(IconTypes.Sun));
    labelNight.append(Icon(IconTypes.Moon));

    divInput.append(input);
    form.append(labelDay, divInput, labelNight);

    themeSwitcher.append(form);

    const switcher = themeSwitcher.querySelector('#themeSwitcher');

    switcher.addEventListener('click', changeTheme);

    if (theme && theme === 'light') {
        switcher.removeAttribute('checked');
    }

    return themeSwitcher;
}