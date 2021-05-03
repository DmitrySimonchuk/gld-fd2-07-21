import {
    Content
} from './components/content';
import styles from './styles.module.scss';

export function Main() {
    const main = document.createElement('main');

    main.classList.add(styles.main, 'main');
    main.setAttribute('id', 'main');

    /*const datePickerWrapper = document.createElement('div');
    const datePicker = document.createElement('input');

    datePicker.setAttribute('id', 'datetimepicker');
    datePicker.setAttribute('type', 'text');

    datePicker.datetimepicker();

    datePickerWrapper.append(datePicker);*/

    main.append(Content());

    return main;
}