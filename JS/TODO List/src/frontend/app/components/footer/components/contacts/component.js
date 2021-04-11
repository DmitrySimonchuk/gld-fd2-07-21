import {
    CreateContactsList,
    CreateLink
} from './helpers';
import {
    linkMyContacts
} from './myContacts';
import {    
    IconTypes
} from "../../../base/icon";
import styles from './styles.module.scss';

export function Contacts() {
    const contacts = document.createElement('ul');

    contacts.classList.add(styles.contacts);
    contacts.append(
        CreateContactsList(CreateLink(linkMyContacts.Skype, IconTypes.Skype)), 
        CreateContactsList(CreateLink(linkMyContacts.Telephon, IconTypes.Phone)),
        CreateContactsList(CreateLink(linkMyContacts.Email, IconTypes.Envelope)),
        CreateContactsList(CreateLink(linkMyContacts.LinkedLn, IconTypes.Linkedin))
        );

    return contacts;
}