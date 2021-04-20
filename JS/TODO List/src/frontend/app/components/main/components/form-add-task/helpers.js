import { TasksService } from "../../../../services/tasks.services";
import { formAddTaskSelector } from "./constans";

export function addTask(e) {
    e.preventDefault();

    const form = document.querySelector(formAddTaskSelector);
    const titleInput = document.querySelector('form input');
    const bodyTextarea = document.querySelector('form textarea');
    const title = titleInput.value;
    const taskBody = bodyTextarea.value;
    const tasksService = new TasksService();

    document.querySelector('modal')?.remove();
        
    console.log(title, overview);

    tasksService.postTask({
        title,
        taskBody
    })
        .then(data => {
            const movieRecomendation = MovieRecomendation({
                id: data.id,
                title,
                body
            });
            document.querySelector('[class^="content"]').prepend(movieRecomendation);
            document.querySelector('modal')?.remove();

            closeModal(e);

            $.alert({
                title: 'Alert!',
                content: 'Simple alert!'
            });            
        })
        .catch(err => { console.log(err) })
}