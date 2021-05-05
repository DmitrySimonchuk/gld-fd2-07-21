import {
    TasksService
} from '../../../../services/tasks.services';
import { 
    CheckIn 
} from '../CheckIn';
import {
    CreateTable
} from '../create-table';
import {
    CreatingTasksList
} from '../creating-tasks-list/component';
import drunkSpinnerImg from './images/drunkSpinner.png';
import styles from './styles.module.scss';

export function Content() { // section

    CheckIn({
        hasOpenUserButton: false,
        hasAddUserButton: false,
        hasDelUserButton: false,
        hasUpdatePassUserButton: true
    });  
    
    const userId = '';    

    const content = document.createElement('section');
    const contentContainer = document.createElement('div');
    const fr = document.createDocumentFragment();
    const drunkSpinner = document.createElement('img');
    const tasksService = new TasksService();

    const rowTHeader = CreateTable({
        id: '',
        colDeadlineContent: 'Deadline',
        colTitleContent: 'Task',
        colStatusContent: 'Status'
    }, {
        hasAddButton: false,
        hasOpenButton: false,
        colNumberContent: false
    });

    const rowTFooter = CreateTable({
        id: '',
        colDeadlineContent: '',
        colTitleContent: '',
        colStatusContent: ''
    }, {
        hasAddButton: true,
        hasOpenButton: false,
        colNumberContent: false
    });

    rowTHeader.classList.add(styles.theader);
    rowTFooter.classList.add(styles.tfooter);

    contentContainer.classList.add(styles.contentContainer, 'content-container');
    drunkSpinner.classList.add(styles.drunkSpinner);
    content.classList.add(styles.content, 'content');

    drunkSpinner.src = drunkSpinnerImg;

    content.append(drunkSpinner);

    tasksService.getTasks().then(tasks => {
        tasks.forEach((task) => {
            if (task.userId === userId) {
                fr.append(CreatingTasksList({
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

        drunkSpinner.remove();
        contentContainer.append(fr);
        content.append(rowTHeader, contentContainer, rowTFooter);
    });

    return content;
}