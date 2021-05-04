import { 
    TasksService 
} from "../../../../../../services/tasks.services";
import { 
    closeModal, createDateInNewFormat_DD_MM_YYYY, 
    createDateInNewFormat_HH_MM} from "../../../../../base";

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

    const tasksService = new TasksService();
    
    document.querySelector('modal')?.remove();

    tasksService.putTask(taskId, {    
        userId,    
        title,
        body,
        deadline,
        status,
        priority
    }).then(task => {       
        const taskRow = document.querySelector(`.task-row[data-id="${taskId}"]`);

        const titleEl = taskRow.querySelector('.task-title');
        const deadlineEl = taskRow.querySelector('.task-deadline');
        const deadlineElDate = taskRow.querySelector('.task-deadline-date');
        const deadlineElTime = taskRow.querySelector('.task-deadline-time');
        const statusEl = taskRow.querySelector('.task-status');
        
        titleEl.textContent = task.title;        
        deadlineElDate.textContent = createDateInNewFormat_DD_MM_YYYY(+task.deadline);
        deadlineElTime.textContent = createDateInNewFormat_HH_MM(+task.deadline);                
        statusEl.textContent = task.status;
        
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