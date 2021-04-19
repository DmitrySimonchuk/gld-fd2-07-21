import { createDateInNewFormat_DD_MM_YYYY_HH_MM } from '../../../base';
import { OpenTaskButton } from '../creating-tasks-list/components';
import styles from './styles.module.scss';

export function Task(task) {
    const taskSection = document.createElement('section');

    taskSection.append(CreatingTaskModal(task, {
        hasOpenButton: false,
        hasEditButton: false        
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
    hasEditButton = true
} = {}) {
    const card = document.createElement('div');
    const cardHeader = document.createElement('div');
    const cardBody = document.createElement('div');
    const cardTitle = document.createElement('h5');
    const cardText = document.createElement('p');
    const cardStatus = document.createElement('p');
    const cardPriority = document.createElement('p');
    const cardDateCreating = document.createElement('p');
    
    card.classList.add('card', 'text-white', 'bg-primary', 'mb-3');
    cardHeader.classList.add('card-header');
    cardBody.classList.add('card-body', styles.cardBody);
    cardTitle.classList.add('card-title');
    cardText.classList.add('card-text');
    cardStatus.classList.add('card-text');
    cardPriority.classList.add('card-text');
    cardDateCreating.classList.add('card-text');

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

    card.append(cardHeader, cardBody);

    return card;
}   