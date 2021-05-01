import {
    createDateInNewFormat_DD_MM_YYYY_HH_MM    
} from '../../../base';
import {
    CreateTable
} from '../create-table';
import styles from './styles.module.scss';

export function CreatingTasksList({
    id,
    title,
    body,
    date_creating,
    deadline,
    status,
    priority
}) {
    const row = CreateTable({
        id,
        colDeadlineContent: createDateInNewFormat_DD_MM_YYYY_HH_MM(+deadline),
        colTitleContent: title,
        colStatusContent: status
    }, {
        hasAddButton: false,
        hasOpenButton: true,
        colNumberContent: true
    });
        
    row.setAttribute('data-id', id);
    
    return row;
}