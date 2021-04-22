import { AddTaskButton } from "../main/components/creating-tasks-list/components";
import styles from './styles.module.scss';

export function Header() {
    const header = document.createElement('header');
        
    header.append(AddTaskButton() /*, HeaderNav(), Logo(), SearchBar(), UserControlPanel(), ThemeSwitcher()*/);

    header.classList.add('header', 'm-4');

    return header;
}