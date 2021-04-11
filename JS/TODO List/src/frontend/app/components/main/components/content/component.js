import { CreatingTasksList } from '../creating-task-list/component';
import styles from './styles.module.scss';

export function Content() { // section
    const content = document.createElement('section');
    const spinner = document.createElement('img');
    const fr = document.createDocumentFragment();

    spinner.setAttribute('src', 'src/frontend/images/109(2).png');
    content.classList.add(styles.content);

    content.append(spinner);

    fetch('http://localhost:3000/tasks?page=1').then(res => res.json()).then(tasks => {
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

        spinner.remove();
        content.append(fr);
    });
    
    return content;
}