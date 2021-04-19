import { TasksService } from "../../../../../../services/tasks.services";
import { Button, Modal } from "../../../../../base";
import { FormEditTask } from "../../../form-edit-task";

export function EditTaskButton(id) {
    const btn = Button({
        classlist: `btn btn-secondary`,
        content: 'Edit',
        clickHandler: editTask
    });

    btn.setAttribute('data-id', id);

    return btn;
}

function editTask(e) {
    const taskId = e.target.dataset.id;

    const tasksService = new TasksService();

    tasksService.getTaskById(taskId)
        .then(task => {
            const form = FormEditTask();
            form.setAttribute('data-id', taskId);

            document.body.append(Modal({
                title: `Edit "${task.title}"`,
                body: form
            }));

            const titleEl = form.elements.title;
            const bodyEl = form.elements.body;

            titleEl.value = task.title;
            bodyEl.value = task.body;
        });
}