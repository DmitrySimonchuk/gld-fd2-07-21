import {
    TasksService
} from "../../../../../../services/tasks.services";
import {    
    closeModal,    
} from "../../../../../base";
import {
    startLoadingSpinner,
    stopLoadingSpinner
} from "../../../../../base/spinner";
import {
    CreatingTasksList
} from "../../../creating-tasks-list";

export function openUser(e) {

    e.preventDefault()

    const form = e.target.closest('form');

    const {
        user: userIdEl,
        password: passEl,
    } = form.elements;

    const userId = userIdEl.value;
    const pass = passEl.value;

    if (localStorage.getItem(userId) && localStorage.getItem(userId) === pass) {
        const divUserId = document.getElementById('userId');
        divUserId.innerText = userId + '';
        
        const fr = document.createDocumentFragment();
        const tasksService = new TasksService();

        document.querySelector('modal')?.remove();

        startLoadingSpinner();

        tasksService.getTasks().then(tasks => {
            tasks.forEach((task) => {
                if (task.userId === userId) {
                    fr.append(CreatingTasksList({
                        userId: task.userId,
                        id: task.id,
                        title: task.title,
                        body: task.body,
                        date_creating: new Date(task.date_creating).getTime(),
                        deadline: task.deadline,
                        status: task.status,
                        priority: task.priority
                    }))
                }
            })

            stopLoadingSpinner();

            document.querySelector('[class^="content-container"]').prepend(fr);
        });

        closeModal(e);
    } else {
        $.alert({
            title: 'Alert!',
            content: 'Repeat password!'
        });
    }
}