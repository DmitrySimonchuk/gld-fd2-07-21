import {
    Button
} from '../../../base';
import {
    addTask
} from '../../../main/components/creating-tasks-list/components/add-task-button/helpers';

import styles from './styles.module.scss';

export function sortForTime(periodOfTime) {
    const sortBlock = document.createElement('div');

    const sortLink = Button({
        classlist: styles.sortBlock,
        content: periodOfTime,
        clickHandler: addTask
    });

    sortBlock.append(sortLink);

    return sortBlock;
}