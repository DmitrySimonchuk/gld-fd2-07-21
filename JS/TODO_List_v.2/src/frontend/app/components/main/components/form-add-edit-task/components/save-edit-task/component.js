import { TasksService } from "../../../../../../services/tasks.services";
import { closeModal } from "../../../../../base";

export function SaveEditingTask(e) {
    e.preventDefault()

    const form = e.target.closest('form');

    const {
        title: titleEl,
        body: bodyEl,
        deadline: deadlineEl,
        status: statusEl,
        priority: priorityEl
    } = form.elements;
    
    const taskId = form.dataset.id;
    const title = titleEl.value;
    const body = bodyEl.value;
    const deadline = deadlineEl.value;
    const status = statusEl.value;
    const priority = priorityEl.value;

    const tasksService = new TasksService();
    
    document.querySelector('modal')?.remove();

    tasksService.putTask(taskId, {        
        title,
        body,
        deadline,
        status,
        priority
    }).then(task => {       
        const taskRow = document.querySelector(`.task-row[data-id="${taskId}"]`);

        const titleEl = taskRow.querySelector('.task-title');
        //const cardTextEl = card.querySelector('.form-body');
        const deadlineEl = taskRow.querySelector('.task-deadline');
        const statusEl = taskRow.querySelector('.task-status');
        //const priorityEl = taskRow.querySelector('.task-priority');

        titleEl.textContent = task.title;
        //cardTextEl.textContent = task.body;
        deadlineEl.textContent = task.deadline;
        statusEl.textContent = task.status;
        //priorityEl.textContent = task.priority;
console.log('test 2   -- ' + task.deadline);

        closeModal(e);

        $.alert({
            type: 'green',
            title: 'Success!',
            content: 'Task successfully saved!'
        });
    })    
    .catch(err => { console.log(err) })
}