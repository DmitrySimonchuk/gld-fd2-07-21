import { Contacts } from './components/contacts';
import { Copyright } from './components/copyright';
import styles from './styles.module.scss';

export function Footer() {
    const footer = document.createElement('footer');

    footer.classList.add(styles.footer, 'footer');
    footer.append(Copyright(), Contacts());

    return footer;
}