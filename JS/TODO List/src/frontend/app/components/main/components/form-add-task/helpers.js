import { TasksService } from "../../../../services/tasks.services";
import { Task } from "../task";
import { closeModal, Modal } from "../../../base";
import { FormEditTask } from "../form-edit-task";
import { formAddTaskSelector } from "./constans";
import { CreatingTasksList } from "../creating-tasks-list/component";

export function addTask(e) {
    e.preventDefault();

    const form = document.querySelector(formAddTaskSelector);
    const titleInput = document.querySelector('form input');
    const bodyTextarea = document.querySelector('form textarea');
    const title = titleInput.value;
    const taskBody = bodyTextarea.value;
    
    const tasksService = new TasksService();
    
    document.querySelector('modal')?.remove();
           
    console.log(title, taskBody);

    tasksService.postTask({
        title,
        taskBody
    })
        .then(data => {
            const task = CreatingTasksList({
                id: data.id,
                title,
                taskBody
            });
            document.querySelector('[class^="content"]').prepend(task);
                        
            document.querySelector('modal')?.remove();

            closeModal(e);

            $.alert({
                title: 'Alert!',
                content: 'Simple alert!'
            });            
        })
        .catch(err => { console.log(err) })
}