import {
    createDateInNewFormat_DD_MM_YYYY,
    createDateInNewFormat_HH_MM,
    Icon,
    IconTypes
} from '../../../base';
import {
    AddTaskButton,
    OpenTaskButton
} from '../creating-tasks-list/components';
import styles from './styles.module.scss';

export function CreateTable({
    id = '',
    colDeadlineContent = '',
    colTitleContent = '',
    colStatusContent = '',
}, {
    hasAddButton = true,
    hasOpenButton = true,
    colNumberContent = true
} = {}) {
    const row = document.createElement('div');
    const colNumber = document.createElement('div');
    const colDeadline = document.createElement('div');
    const colDeadlineDate = document.createElement('div');
    const colDeadlineTime = document.createElement('div');

    const colTitle = document.createElement('div');
    const colStatus = document.createElement('div');
    const colBtn = document.createElement('div');

    row.classList.add(styles.row, 'task-row');
    colNumber.classList.add(styles.col);

    colDeadline.classList.add(styles.col, 'task-deadline');
    colDeadlineDate.classList.add(styles.col, 'task-deadline-date');
    colDeadlineTime.classList.add(styles.col, 'task-deadline-time');

    colTitle.classList.add(styles.col, 'task-title');
    colStatus.classList.add(styles.col, 'task-status');
    colBtn.classList.add(styles.col);
    
    if (colDeadlineContent === 'Deadline') {
        colDeadline.textContent = colDeadlineContent;
    } else if (colDeadlineContent === '') {
        colDeadline.textContent = '';
    } else {
        const date = Date.parse(colDeadlineContent);

        colDeadlineDate.textContent = createDateInNewFormat_DD_MM_YYYY(date);
        colDeadlineTime.textContent = createDateInNewFormat_HH_MM(date);

        colDeadline.append(colDeadlineDate, colDeadlineTime);
    }  

    colTitle.textContent = colTitleContent;
    colStatus.textContent = colStatusContent;

    if (hasAddButton) {
        colBtn.append(AddTaskButton());
    };

    if (hasOpenButton) {
        colBtn.append(OpenTaskButton(id));
    };

    if (colNumberContent) {
        colNumber.append(Icon(IconTypes.Circle, '1x'));
    };

    row.append(colNumber, colDeadline, colTitle, colStatus, colBtn);

    return row;
}