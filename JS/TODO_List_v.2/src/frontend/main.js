import {
    App
} from './app';
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