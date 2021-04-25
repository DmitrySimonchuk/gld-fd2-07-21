import { TasksService } from "../../../../../../services/tasks.services";
import { closeModal } from "../../../../../base";

export function SaveEditingTask(e) {
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
    
    document.querySelector('modal')?.remove();

    tasksService.putTask(taskId, {        
        title,
        body
    }).then(task => {       
        const card = document.querySelector(`.card[data-id="${taskId}"]`);

        const cardTitleEl = card.querySelector('.card-title');
        //const cardTextEl = card.querySelector('.form-body');

        cardTitleEl.textContent = task.title;
        //cardTextEl.textContent = task.body;

        closeModal(e);

        $.alert({
            type: 'green',
            title: 'Success!',
            content: 'Task successfully saved!'
        });
    })    
    .catch(err => { console.log(err) })
}