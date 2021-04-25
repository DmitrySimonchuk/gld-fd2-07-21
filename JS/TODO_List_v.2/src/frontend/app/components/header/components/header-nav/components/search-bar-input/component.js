import { debounce } from "../../../../../base";
import { search } from "./helpers";

export function SearchBarInput() {
    const searchBarInput = document.createElement('input');

    searchBarInput.classList.add('search-bar-input', 'form-control');

    const debouncedSearch = debounce(search, 500);

    searchBarInput.addEventListener('keypress', debouncedSearch);

    return searchBarInput;
}