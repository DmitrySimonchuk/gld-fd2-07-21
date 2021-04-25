import styles from './styles.module.scss';

export function LogoIcon() {
    const logoIcon = document.createElement('img');

    logoIcon.classList.add(styles.logoIcon);
    logoIcon.setAttribute('src', 'src/frontend/images/pen.png');

    return logoIcon;
}