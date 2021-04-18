import { Button, Modal } from "../../../../../base";
import { TasksService } from "../../../../../../services/tasks.services";
import { Task } from "../../../task";

import styles from './styles.module.scss';

export function OpenTaskButton(id) {
    const btn = Button({
        classlist: `btn btn-primary ${styles.btnOpenMovie}`,
        content: 'Open',
        clickHandler: openTask
    });

    btn.setAttribute('data-id', id);

    return btn;
}

function openTask(e) {
    const taskId = e.target.dataset.id;    
    const tasksService = new TasksService();

    tasksService.getTaskById(taskId)
        .then(task => {
            if (task) {
                document.body.append(Modal({
                    title: task.title,
                    body:
                        /*`
                            <h5>${movie.overview}<h5>
                            <p>${new Date(movie.release_date)}</p>
                            <p>${movie.genres.map(g => `<span class = "badge bg-primary">${g}</span>`).join()}</p>
                        `,*/
                        Task(task),
                    hasFooterCloseButton: true,
                    footerButtons: [
                        Button({
                            content: 'Save changes'
                        })
                    ]
                }));
            }
        })
        .catch(console.error);
}