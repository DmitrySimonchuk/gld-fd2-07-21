import { Button } from "../../../../../base";
import { openTask } from "./helpers";
import styles from './styles.module.scss';

export function OpenTaskButton(id) {
    const btn = Button({
        classlist: `btn btn-primary ${styles.btnOpenMovie}`,
        content: 'Open',
        clickHandler: openTask
    });

    btn.setAttribute('data-id', id);

    return btn;
}