import {
    createDateInNewFormat_DD_MM_YYYY,
    createDateInNewFormat_HH_MM    
} from '../../../base';
import {
    EditTaskButton,
    OpenTaskButton
} from '../creating-tasks-list/components';
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
    deadline,
    status,
    priority
}, {
    hasOpenButton = true,
    hasEditButton = true,
    hasDeleteButton = true
} = {}) {
    const cardModal = document.createElement('div');
    const cardModalHeader = document.createElement('div');
    const cardModalDeadlineDate = document.createElement('div');
    const cardModalDeadlineTime = document.createElement('div');

    const cardModalBody = document.createElement('div');

    const cardModalTitleTask = document.createElement('h5');
    const cardModalTitle = document.createElement('h5');

    const cardModalTextTask = document.createElement('p');
    const cardModalText = document.createElement('p');

    const cardModalStatusTask = document.createElement('p');
    const cardModalStatus = document.createElement('p');

    const cardModalPriorityTask = document.createElement('p');
    const cardModalPriority = document.createElement('p');

    const cardModalDateCreatingDate = document.createElement('p');
    const cardModalDateCreatingTime = document.createElement('p');
    const cardModalDateCreating = document.createElement('p');

    cardModal.classList.add('card-modal', 'text-modal', 'bg-modal-body', 'mb-3');

    cardModalHeader.classList.add('card-modal-header', 'td-modal');
    cardModalDeadlineDate.classList.add('card-modal-header', 'date-modal');
    cardModalDeadlineTime.classList.add('card-modal-header', 'date-modal');

    cardModalBody.classList.add('card-modal-body', styles.cardBody);

    cardModalTitleTask.classList.add('td-modal');
    cardModalTitle.classList.add('date-modal');

    cardModalTextTask.classList.add('td-modal');
    cardModalText.classList.add('date-modal');

    cardModalStatusTask.classList.add('td-modal');
    cardModalStatus.classList.add('date-modal');

    cardModalPriorityTask.classList.add('td-modal');
    cardModalPriority.classList.add('date-modal');

    cardModalDateCreating.classList.add('td-modal');
    cardModalDateCreatingDate.classList.add('date-modal');
    cardModalDateCreatingTime.classList.add('date-modal');

console.log('test   ' + deadline);
console.log(typeof(deadline) );
    if (deadline.includes('T')) {
        deadline = Date.parse(deadline);
        console.log('test   5   ' + deadline);
    }

    cardModalHeader.textContent = 'deadline: ';
    cardModalDeadlineDate.textContent = createDateInNewFormat_DD_MM_YYYY(+deadline);
    cardModalDeadlineTime.textContent = createDateInNewFormat_HH_MM(+deadline);

    cardModalTitleTask.textContent = 'title: ';
    cardModalTitle.textContent = title;

    cardModalTextTask.textContent = 'task: ';
    cardModalText.textContent = body;

    cardModalStatusTask.textContent = 'status: ';
    cardModalStatus.textContent = status;

    cardModalPriorityTask.textContent = 'priority: ';
    cardModalPriority.textContent = priority;

    cardModalDateCreating.textContent = 'date creating: ';
    cardModalDateCreatingDate.textContent = createDateInNewFormat_DD_MM_YYYY(+date_creating);
    cardModalDateCreatingTime.textContent = createDateInNewFormat_HH_MM(+date_creating);

    cardModalHeader.append(cardModalDeadlineDate, cardModalDeadlineTime);
    cardModalTitleTask.append(cardModalTitle);
    cardModalTextTask.append(cardModalText);
    cardModalStatusTask.append(cardModalStatus);
    cardModalPriorityTask.append(cardModalPriority);
    cardModalDateCreating.append(cardModalDateCreatingDate, cardModalDateCreatingTime);

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