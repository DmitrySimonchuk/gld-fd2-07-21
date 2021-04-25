import { TasksService } from "../../../../../../services/tasks.services";
import { closeModal } from "../../../../../base";
import { CreatingTasksList } from "../../../creating-tasks-list";

export function SaveAddingTask(e) {
    e.preventDefault();

    const form = e.target.closest('form');

    const {
        title: titleEl,
        body: bodyEl
    } = form.elements;

    const title = titleEl.value;
    const body = bodyEl.value;
    
    const tasksService = new TasksService();
    
    document.querySelector('modal')?.remove();
    
    tasksService.postTask({
        title,
        body
    })
        .then(data => {
            const task = CreatingTasksList({
                id: data.id,
                title,
                body
            });
            document.querySelector('[class^="content"]').prepend(task);
      
            closeModal(e);

            $.alert({
                title: 'Alert!',
                content: 'Simple alert!'
            });            
        })
        .catch(err => { console.log(err) })
}