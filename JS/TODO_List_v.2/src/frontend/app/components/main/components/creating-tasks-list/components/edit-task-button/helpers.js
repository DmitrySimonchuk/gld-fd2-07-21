import {
    TasksService
} from "../../../../../../services/tasks.services";
import {
    Modal
} from "../../../../../base";
import {
    FormAddEditTask,
    formEditTaskClassName
} from "../../../form-add-edit-task";
import {
    SaveEditingTask
} from "../../../form-add-edit-task/components";

export function editTask(e) {
    const taskId = e.target.dataset.id;

    const tasksService = new TasksService();

    tasksService.getTaskById(taskId)
        .then(task => {
            const form = FormAddEditTask({
                contentTextButton: 'Save',
                addSaveTask: SaveEditingTask,
                formTaskClassName: formEditTaskClassName,
                taskValues: {
                    titleInput: '',
                    taskBody: '',
                    deadline: '', 
                    status: '',      
                    priority: '',           
                }
            });
            form.setAttribute('data-id', taskId);

            document.body.append(Modal({
                title: `Edit: "${task.title}"`,
                body: form
            }));

            const titleEl = form.elements.title;
            const bodyEl = form.elements.body;
            const deadlineEl = form.elements.deadline;
            const statusEl = form.elements.status;
            const priorityEl = form.elements.priority;

            titleEl.value = task.title;
            bodyEl.value = task.body;
            deadlineEl.value = task.deadline;
            statusEl.value = task.status;
            priorityEl.value = task.priority;
        });
}