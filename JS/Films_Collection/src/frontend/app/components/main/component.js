import { Aside } from './components/aside';
import { Content } from './components/content';
import { FormAddMovie } from './components/form-add-movie';

export function Main() {
    const main = document.createElement('main');

    main.append(FormAddMovie(), Aside(), Content());

    return main;
}