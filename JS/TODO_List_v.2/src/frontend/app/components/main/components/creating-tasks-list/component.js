import { createDateInNewFormat_DD_MM_YYYY_HH_MM } from '../../../base';
import { OpenTaskButton } from './components';
import styles from './styles.module.scss';

export function CreatingTasksList({
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
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    const th = document.createElement('th');

    const card = document.createElement('div');
    const cardHeader = document.createElement('div');
    const cardBody = document.createElement('div');
    const cardTitle = document.createElement('h5');
    const cardText = document.createElement('p');
    /*const cardTextTask = document.createElement('p');*/

    card.setAttribute('data-id', id);
    
    table.classList.add('table');

    card.classList.add('card', 'text-white', 'bg-primary', 'mb-3');
    cardHeader.classList.add('card-header');
    cardBody.classList.add('card-body', styles.cardBody);
    cardTitle.classList.add('card-title');
    cardText.classList.add('card-text');
    /*cardTextTask.classList.add('card-text', 'card-text-task');*/

    cardHeader.textContent = 'dedline: ' + createDateInNewFormat_DD_MM_YYYY_HH_MM(+dedline);
    cardTitle.textContent = 'task: ' + title;
    cardText.textContent = 'status: ' + status;
    /*cardTextTask.textContent = 'task: ' + body;*/

    table.append();

    cardBody.append(cardTitle, /*cardTextTask, */cardText);

    if (hasOpenButton) {
        cardBody.append(OpenTaskButton(id))
    }

    card.append(cardHeader, cardBody);

    return card;
}   