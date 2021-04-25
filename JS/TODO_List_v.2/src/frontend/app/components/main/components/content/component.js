import { TasksService } from '../../../../services/tasks.services';
import { CreatingTasksList } from '../creating-tasks-list/component';
import styles from './styles.module.scss';

export function Content() { // section
    const content = document.createElement('section');
    const drunkSpinner = document.createElement('img');
    const fr = document.createDocumentFragment();
    const tasksService = new TasksService();

    drunkSpinner.setAttribute('src', 'src/frontend/images/drunkSpinner.png');
    drunkSpinner.classList.add(styles.drunkSpinner);
    content.classList.add(styles.content);
    
    content.append(drunkSpinner);

    tasksService.getTasks().then(tasks => {
        tasks.forEach((task) => {
            fr.append(CreatingTasksList({
                id: task.id,
                title: task.title,
                body: task.body,
                date_creating: new Date(task.date_creating).getDate(),
                dedline: task.dedline,
                status: task.status,
                priority: task.priority
            }))
        });

        drunkSpinner.remove();
        content.append(fr);
    });
    
    return content;
}