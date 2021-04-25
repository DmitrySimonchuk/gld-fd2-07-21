import { createDateInNewFormat_DD_MM_YYYY_HH_MM } from '../../../base';
import { EditTaskButton, OpenTaskButton } from '../creating-tasks-list/components';
import styles from './styles.module.scss';

export function Task(task) {
    const taskSection = document.createElement('section');

    taskSection.append(CreatingTaskModal(task, {
        hasOpenButton: false,
        hasEditButton: false,
        hasDeleteButton: false
    }));

    return taskSection;
}

function CreatingTaskModal({
    id,
    title,
    body,
    date_creating,
    dedline,
    status,
    priority
}, {
    hasOpenButton = true,
    hasEditButton = true,
    hasDeleteButton = true
} = {}) {
    const cardModal = document.createElement('div');
    const cardModalHeader = document.createElement('div');
    const cardModalBody = document.createElement('div');
    const cardModalTitleTask = document.createElement('h5');
    const cardModalTextTask = document.createElement('p');
    const cardModalStatusTask = document.createElement('p');
    const cardModalPriorityTask = document.createElement('p');
    const cardModalDateCreating = document.createElement('p');
    
    cardModal.classList.add('card-modal', 'text-white', 'bg-primary', 'mb-3');
    cardModalHeader.classList.add('card-modal-header');
    cardModalBody.classList.add('card-modal-body', styles.cardBody);
    cardModalTitleTask.classList.add('card-modal-title-task');
    cardModalTextTask.classList.add('card-modal-text-task');
    cardModalStatusTask.classList.add('card-modal-status');
    cardModalPriorityTask.classList.add('card-modal-priority');
    cardModalDateCreating.classList.add('card-modal-date-creating');

    cardModalHeader.textContent = 'dedline: ' + createDateInNewFormat_DD_MM_YYYY_HH_MM(+dedline);
    cardModalTitleTask.textContent = 'title: ' + title;
    cardModalTextTask.textContent = 'task: ' + body;
    cardModalStatusTask.textContent = 'status: ' + status;
    cardModalPriorityTask.textContent = 'priority: ' + priority;
    cardModalDateCreating.textContent = 'date creating: ' + createDateInNewFormat_DD_MM_YYYY_HH_MM(+date_creating);

    cardModalBody.append(cardModalTitleTask, cardModalTextTask, cardModalStatusTask, cardModalPriorityTask, cardModalDateCreating);

    if (hasOpenButton) {
        cardModalBody.append(OpenTaskButton(id))
    }

    if (hasEditButton) {
        cardModalBody.append(EditTaskButton(id))
    }

    if (hasDeleteButton) {
        cardModalBody.append(DeleteTaskButton(id))
    }

    cardModal.append(cardModalHeader, cardModalBody);

    return cardModal;
}   