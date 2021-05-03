import { 
    TasksService 
} from "../../../../../../services/tasks.services";
import { 
    closeModal, createDateInNewFormat_DD_MM_YYYY, 
    createDateInNewFormat_DD_MM_YYYY_HH_MM, 
    createDateInNewFormat_HH_MM} from "../../../../../base";
import { createDateInNewFormat_ms } from "../../../../../base";

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
    const deadline = Date.parse(deadlineEl.value) + '';
    const status = statusEl.value;
    const priority = priorityEl.value;

console.log('test 7   -- ' + deadline);
console.log('test 7 1   -- ' + typeof(deadline));
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
        const deadlineElDate = taskRow.querySelector('.task-deadline-date');
        const deadlineElTime = taskRow.querySelector('.task-deadline-time');

        const statusEl = taskRow.querySelector('.task-status');
        //const priorityEl = taskRow.querySelector('.task-priority');

//console.log(typeOf(task.deadline) );
console.log('test 2   -- ' + task.deadline);
//task.deadline = createDateInNewFormat_DD_MM_YYYY_HH_MM(Date.parse(task.deadline));
console.log('test 3   -- ' + task.deadline);

        titleEl.textContent = task.title;
        //cardTextEl.textContent = task.body;
        //deadlineEl.textContent = task.deadline;
        deadlineElDate.textContent = createDateInNewFormat_DD_MM_YYYY(+task.deadline);
        deadlineElTime.textContent = createDateInNewFormat_HH_MM(+task.deadline);
                
        statusEl.textContent = task.status;
        //priorityEl.textContent = task.priority;

        if (task.status === 'Done') {            
            taskRow.classList.add('done'); 
            taskRow.classList.remove('important-task');                  
        }

        if (task.priority === 'Important!') {
            if (task.status !== 'Done') {
                taskRow.classList.remove('done');
                taskRow.classList.add('important-task');
            }        
        }

        if (task.priority === 'So-so') {   
            if (task.status !== 'Done'){
                taskRow.classList.remove('done');
                taskRow.classList.remove('important-task');
            }                              
        }

        closeModal(e);

        $.alert({
            type: 'green',
            title: 'Success!',
            content: 'Task successfully saved!'
        });
    })    
    .catch(err => { console.log(err) })
}