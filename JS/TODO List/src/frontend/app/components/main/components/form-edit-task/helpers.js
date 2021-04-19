import { TasksService } from "../../../../services/tasks.services";
import { closeModal } from "../../../base/modal";

export function saveTask(e) {
    e.preventDefault()

    const form = e.target.closest('form');

    const {
        title: titleEl,
        body: bodyEl
    } = form.elements;

    const taskId = form.dataset.id;
    const title = titleEl.value;
    const body = bodyEl.value;

    const tasksService = new TasksService();
    
    tasksService.putTask(taskId, {        
        title,
        body
    }).then(task => {
        console.log('1' + task.title + '1');

        const card = document.querySelector(`.edit-task[data-id="${taskId}"]`);

        console.log(card);

        const cardTitleEl = card.querySelector('.form-title');
        const cardTextEl = card.querySelector('.form-body');

        cardTitleEl.textContent = task.title;
        cardTextEl.textContent = task.body;

        console.log(cardTitleEl.textContent);

        closeModal(e);
/*
        $.alert({
            type: 'green',
            title: 'Success!',
            content: 'Task successfully saved!'
        });*/
    });
}