import {
    HeaderNav,
    Logo
} from "./components";
import styles from './styles.module.scss';

export function Header() {
    const header = document.createElement('header');

    header.append(Logo(), HeaderNav());

    header.classList.add(styles.header, 'm-4');
    header.setAttribute('id', 'header');

    return header;
}