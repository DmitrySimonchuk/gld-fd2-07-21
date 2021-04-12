import {
    App
} from './app';
import {
    Button
} from './app/components/base/button';
import {
    Modal
} from './app/components/base/modal';

import '../../node_modules/jquery-confirm/dist/jquery-confirm.min.js';

import './styles.scss';

document.querySelector('#root').append(
    App()/*,
    Modal({
        title: 'Modal-title',
        body: 'Modal body text goes here.',
        hasFooterCloseButton: true,
        footerButtons: [
            Button({
                content: 'Save changes'
            }),
            Button({
                classlist: 'btn btn-info',
                content: 'Discard changes'
            }),
        ]
    })*/
);