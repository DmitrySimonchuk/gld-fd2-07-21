import {
    LogoIcon,
    LogoName
} from "./components";
import styles from './styles.module.scss';

export function Logo() {
    const logo = document.createElement('div');

    logo.classList.add(styles.logo);

    logo.append(LogoIcon(), LogoName());

    return logo;
}