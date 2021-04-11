import styles from './styles.module.scss';

export function CreatingTasksList({
    id,
    title,
    body,
    date_creating,
    dedline,
    status,
    priority
}) {
    const card = document.createElement('div');
    const cardHeader = document.createElement('div');
    const cardBody = document.createElement('div');
    const cardTitle = document.createElement('h5');
    const cardText = document.createElement('p');

    card.classList.add('card', 'text-white', 'bg-primary', 'mb-3');
    cardHeader.classList.add('card-header');
    cardBody.classList.add('card-body', styles.cardBody);
    cardTitle.classList.add('card-title');
    cardText.classList.add('card-text');

    cardHeader.textContent = new Date(+dedline);
    cardTitle.textContent = title;
    cardText.textContent = status;

    cardBody.append(cardTitle, cardText);

    card.append(cardHeader, cardBody);

    return card;
}