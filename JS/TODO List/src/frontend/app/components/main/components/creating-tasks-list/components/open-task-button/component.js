import { Button, Modal } from "../../../../../base";
import { TasksService } from "../../../../../../services/tasks.services";
import { Task } from "../../../task";
import { EditTaskButton } from "../edit-task-button";
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
                    body: Task(task),
                    hasFooterCloseButton: true,
                    footerButtons: [
                        EditTaskButton(taskId)
                    ]
                }));
            }
        })
        .catch(console.error);
}