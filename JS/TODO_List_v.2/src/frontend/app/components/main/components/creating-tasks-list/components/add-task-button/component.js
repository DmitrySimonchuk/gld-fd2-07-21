import { Button, Icon, IconTypes } from "../../../../../base";
import { addTask } from "./helpers";
import styles from './styles.module.scss';

export function AddTaskButton() {
    const plus = Icon(IconTypes.Plus).outerHTML;
    const btn = Button({
        classlist: styles.addTaskButton,
        content: plus,
        clickHandler: addTask
    });

    return btn;
}