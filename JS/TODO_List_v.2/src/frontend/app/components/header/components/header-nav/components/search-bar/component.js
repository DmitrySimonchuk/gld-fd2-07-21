import {
    Icon,
    IconTypes
} from '../../../../../base';
import {
    SearchBarInput
} from '../search-bar-input';
import styles from './styles.module.scss';

export function SearchBar() {
    const searchBar = document.createElement('div');
    const searchIcon = document.createElement('div');

    searchBar.classList.add(styles.searchBar);

    searchIcon.append(Icon(IconTypes.Search, '2x'));
    searchBar.append(searchIcon, SearchBarInput());

    return searchBar;
}