import {
    Icon    
} from "../../../base";
import styles from './styles.module.scss';

export function CreateContactsList(contact) {
    const contactsListen = document.createElement('li');

    contactsListen.classList.add(styles.li);
    contactsListen.append(contact);

    return contactsListen;
}

export function CreateLink(link, iconTypeLink) {
    const contactLink = document.createElement('a');

    contactLink.setAttribute('href', `${link}`);
    contactLink.setAttribute('title', `${link}`);

    contactLink.append(Icon(iconTypeLink));

    return contactLink;
}