import {
    Button
} from "../../../../../base";
import {
    openTask
} from "./helpers";
import stylesBtn from '../../../../../base/button/styles.module.scss';
import styles from './styles.module.scss';

export function OpenTaskButton(id) {
    const btn = Button({
        classlist: `btn ${stylesBtn.myButton}`,
        content: 'Open',
        clickHandler: openTask
    });

    btn.setAttribute('data-id', id);

    return btn;
}