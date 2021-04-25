import {
    AddTaskButton
} from '../../../main/components/creating-tasks-list/components';
import {
    SearchBar
} from './components';
import {
    PeriodOfTime
} from './constans';
import {
    sortForTime
} from './helpers';
import styles from './styles.module.scss';

export function HeaderNav() {
    const headerNav = document.createElement('div');
    const headerNavSort = document.createElement('div');
    const headerNavFind = document.createElement('div');
    
    headerNav.classList.add(styles.headerNav);
    headerNavSort.classList.add(styles.headerNavSort);
    headerNavFind.classList.add(styles.headerNavFind);

    headerNavSort.append(sortForTime(PeriodOfTime.day), sortForTime(PeriodOfTime.week), sortForTime(PeriodOfTime.year));
    headerNavFind.append(SearchBar(), AddTaskButton());

    headerNav.append(headerNavSort, headerNavFind);

    return headerNav;
}