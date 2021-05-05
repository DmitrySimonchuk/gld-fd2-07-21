import {
    TasksService
} from "../../../../../../services/tasks.services";
import {
    closeModal, Icon, IconTypes
} from "../../../../../base";
import { 
    startLoadingSpinner, stopLoadingSpinner 
} from "../../../../../base/spinner";
import {
    CreatingTasksList
} from "../../../creating-tasks-list";
import styles from './styles.module.scss';

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
        const divUserId = document.createElement('div');
        const fr = document.createDocumentFragment();
        const tasksService = new TasksService();

        const checkInWrapper = document.createElement('div');
        const checkInLogo = document.createElement('div');

        checkInWrapper.classList.add(styles.checkInWrapper);        

        document.querySelector('modal')?.remove();
    
        divUserId.textContent = userId + '';

        divUserId.setAttribute('id', 'userId');

        checkInLogo.append(Icon(IconTypes.User, '2x'));
        checkInWrapper.append(checkInLogo, divUserId);
        document.querySelector('.todos-switcher').prepend(checkInWrapper);

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