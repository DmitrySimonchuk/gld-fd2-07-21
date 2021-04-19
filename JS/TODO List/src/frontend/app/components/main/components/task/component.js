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
    const card = document.createElement('div');
    const cardHeader = document.createElement('div');
    const cardBody = document.createElement('div');
    const cardTitle = document.createElement('h5');
    const cardText = document.createElement('p');
    const cardStatus = document.createElement('p');
    const cardPriority = document.createElement('p');
    const cardDateCreating = document.createElement('p');
    
    card.classList.add('card-modal', 'text-white', 'bg-primary', 'mb-3');
    cardHeader.classList.add('card-modal-header');
    cardBody.classList.add('card-modal-body', styles.cardBody);
    cardTitle.classList.add('card-modal-title-task');
    cardText.classList.add('card-modal-text-task');
    cardStatus.classList.add('card-modal-status');
    cardPriority.classList.add('card-modal-priority');
    cardDateCreating.classList.add('card-modal-date-creating');

    cardHeader.textContent = 'dedline: ' + createDateInNewFormat_DD_MM_YYYY_HH_MM(+dedline);
    cardTitle.textContent = 'title: ' + title;
    cardText.textContent = 'task: ' + body;
    cardStatus.textContent = 'status: ' + status;
    cardPriority.textContent = 'priority: ' + priority;
    cardDateCreating.textContent = 'date creating: ' + createDateInNewFormat_DD_MM_YYYY_HH_MM(+date_creating);

    cardBody.append(cardTitle, cardText, cardStatus, cardPriority, cardDateCreating);

    if (hasOpenButton) {
        cardBody.append(OpenTaskButton(id))
    }

    if (hasEditButton) {
        cardBody.append(EditTaskButton(id))
    }

    if (hasDeleteButton) {
        cardBody.append(DeleteTaskButton(id))
    }

    card.append(cardHeader, cardBody);

    return card;
}   