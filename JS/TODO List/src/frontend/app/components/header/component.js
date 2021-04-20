import { Button, Icon, IconTypes } from "../base";
import { openModalToAddTask } from "./helpers";
import styles from './styles.module.scss';

export function Header() {
    const header = document.createElement('header');
    const plus = Icon(IconTypes.Plus) + '';

    header.append(Button({
            content: `${plus}`,
            clickHandler: openModalToAddTask
        })/*, HeaderNav(), Logo(), SearchBar(), UserControlPanel(), ThemeSwitcher()*/);

    header.classList.add('header', 'm-4');

    return header;
}