import {
    Button
} from '../base/button';
import { Modal } from '../base/modal';
import { FormAddMovie } from '../main/components/form-add-movie';
import { formAddMovieClassName } from '../main/components/form-add-movie/constans';
import {
    HeaderNav
} from './components/header-nav';
import {
    Logo
} from './components/logo';
import {
    SearchBar
} from './components/search-bar';
import { ThemeSwitcher } from './components/theme-switcher/component';
import {
    UserControlPanel
} from './components/user-control-panel';

import './styles.scss';

export function Header() {
    const header = document.createElement('header');

    header.append(Button({
            content: '<i class="fa fa-plus"></i>',
            clickHandler: openModalToAddMovie
        }), HeaderNav(), Logo(), SearchBar(), UserControlPanel(), ThemeSwitcher());

    header.classList.add('header', 'm-4');

    return header;
}

function openModalToAddMovie(e) {
    const modal = Modal({
        body: FormAddMovie()
    });

    document.body.append(modal);
}