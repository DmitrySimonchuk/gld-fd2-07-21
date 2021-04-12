import { Icon, IconTypes } from '../../../base/icon';
import { SearchBarInput } from '../search-bar-input';
import styles from './styles.module.scss';

export function SearchBar() {
    const searchBar = document.createElement('div');
    const searchButton = document.createElement('button');

    searchButton.append(Icon(IconTypes.Search));    
    searchButton.classList.add('btn', 'btn-light');
    searchBar.classList.add(styles.searchBar);
    searchBar.append(SearchBarInput(), searchButton);

    return searchBar;
}