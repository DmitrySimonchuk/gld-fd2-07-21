import { Modal } from "../../../../../base";
import { TasksService } from "../../../../../../services/tasks.services";
import { Task } from "../../../task";
import { EditTaskButton, DeleteTaskButton } from "../../components";

export function openTask(e) {
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
                        EditTaskButton(taskId),
                        DeleteTaskButton(taskId)
                    ]
                }));
            }
        })
        .catch(console.error);
}