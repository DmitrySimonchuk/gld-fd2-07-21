import {
    Button,
    Icon,
    IconTypes
} from "../../../../../base";
import {
    addTask
} from "./helpers";
import styles from './styles.module.scss';
import stylesBtn from '../../../../../base/button/styles.module.scss';

export function AddTaskButton() {
    const plus = Icon(IconTypes.Plus).outerHTML;
    const btn = Button({
        classlist: `${styles.addTaskButton} ${stylesBtn.myButton}`,
        content: plus,
        clickHandler: addTask
    });

    return btn;
}