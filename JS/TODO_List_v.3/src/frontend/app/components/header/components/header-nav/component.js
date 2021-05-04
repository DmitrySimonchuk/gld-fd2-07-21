import {
    AddTaskButton
} from '../../../main/components/creating-tasks-list/components';
import {
    SearchBar,    
    SortForTimeButton,    
    ThemeSwitcher
} from './components';
import {
    PeriodOfTime
} from './constans';
import styles from './styles.module.scss';

export function HeaderNav() {
    const headerNav = document.createElement('div');
    const headerNavSort = document.createElement('div');
    const headerNavFind = document.createElement('div');
    const headerNavSwitcher = document.createElement('div');
    
    const sortForDay = SortForTimeButton(PeriodOfTime.day);
    const sortForWeek = SortForTimeButton(PeriodOfTime.week);
    const sortForMonth = SortForTimeButton(PeriodOfTime.month);
    const sortForYear = SortForTimeButton(PeriodOfTime.year);
    const sortForAll = SortForTimeButton(PeriodOfTime.all);

    headerNav.classList.add(styles.headerNav, 'to-do-header-nav');
    headerNavSort.classList.add(styles.headerNavSort, 'header-nav-sort');
    headerNavFind.classList.add(styles.headerNavFind);
    headerNavSort.classList.add('btn-group');
    
    headerNavSort.setAttribute('role', 'group');

    headerNavSwitcher.append(ThemeSwitcher());
    headerNavSort.append(sortForDay, sortForWeek, sortForMonth, sortForYear, sortForAll);
    headerNavFind.append(SearchBar(), AddTaskButton());

    headerNav.append(headerNavSwitcher, headerNavSort, headerNavFind);

    return headerNav;
}