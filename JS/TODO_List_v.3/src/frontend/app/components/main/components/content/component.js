import { 
    CheckIn 
} from '../CheckIn';
import {
    CreateTable
} from '../create-table';
import {
    ColName
} from './constant';
import styles from './styles.module.scss';

export function Content() { // section

    CheckIn({
        hasOpenUserButton: true,
        hasAddUserButton: false,
        hasDelUserButton: false,
        hasUpdatePassUserButton: false
    });     

    const content = document.createElement('section');
    const contentContainer = document.createElement('div');
        
    const rowTHeader = CreateTable({
        id: '',
        colDeadlineContent: ColName.Deadline,
        colTitleContent: ColName.Task,
        colStatusContent: ColName.Status
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
    content.classList.add(styles.content, 'content');

    content.append(rowTHeader, contentContainer, rowTFooter);

    return content;
}