import styles from './styles.module.scss';
import penImg from './images/pen.png';

export function LogoIcon() {
    const logoIcon = document.createElement('img');

    logoIcon.setAttribute('alt', 'logo-icon');
    logoIcon.setAttribute('title', 'pen');

    logoIcon.classList.add(styles.logoIcon);

    logoIcon.src = penImg;

    return logoIcon;
}