import {
    TasksService
} from "../../../../../../services/tasks.services";
import {
    closeModal
} from "../../../../../base";
import {
    CreatingTasksList
} from "../../../creating-tasks-list";

export function SaveAddingTask(e) {
    e.preventDefault();

    const form = e.target.closest('form');

    const {
        title: titleEl,
        body: bodyEl,
        deadline: deadlineEl,
        status: statusEl,
        priority: priorityEl,
    } = form.elements;

    const title = titleEl.value;
    const body = bodyEl.value;
    const deadline = Date.parse(deadlineEl.value) + '';
    const status = statusEl.value;
    const priority = priorityEl.value;

    const divUserId = document.getElementById('userId');
    const userId = divUserId.innerText;

    const tasksService = new TasksService();

    document.querySelector('modal')?.remove();

    tasksService.postTask({
            userId,
            title,
            body,
            deadline,
            status,
            priority
        })
        .then(data => {
            const task = CreatingTasksList({
                userId,
                id: data.id,
                title,
                body,
                deadline,
                status,
                priority
            });

            document.querySelector('[class^="content-container"]').prepend(task);

            closeModal(e);

            $.alert({
                title: 'Alert!',
                content: 'Simple alert!'
            });
        })
        .catch(err => {
            console.log(err)
        })
}