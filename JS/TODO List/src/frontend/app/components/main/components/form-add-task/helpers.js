import { TasksService } from "../../../../services/tasks.services";
import { Modal } from "../../../base";
import { FormEditTask } from "../form-edit-task";
import { formAddTaskSelector } from "./constans";

export function addTask(e) {
    e.preventDefault();

/*    const form = document.querySelector(formAddTaskSelector);
    const titleInput = document.querySelector('form input');
    const bodyTextarea = document.querySelector('form textarea');
    const title = titleInput.value;
    const taskBody = bodyTextarea.value;*/
    
    const tasksService = new TasksService();

    document.querySelector('modal')?.remove();
        
    //console.log(title, taskBody);

    tasksService.postTask({
        title,
        taskBody
    })
        .then(data => {
            const form = FormEditTask({
                id: data.id,
                title,
                body
            });
            form.setAttribute('data-id', taskId);

            document.body.append(Modal({
                title: `Edit: "${task.title}"`,
                body: form
            }));
            document.querySelector('modal')?.remove();

            closeModal(e);

            $.alert({
                title: 'Alert!',
                content: 'Simple alert!'
            });            
        })
        .catch(err => { console.log(err) })
}