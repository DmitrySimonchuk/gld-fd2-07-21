import {
    Button
} from "../../../base/button";
import { formEditMovieClassName } from "./constans";
import { saveMovie } from "./helpers";
import styles from './styles.module.scss';

export function FormEditMovie() {
    const form = document.createElement('form');

    const titleInput = document.createElement('input');
    const overviewTextarea = document.createElement('textarea');
    const formSubmitButton = Button({
        content: 'Save',
        type: 'submit'
    });

    form.addEventListener('submit', saveMovie);    

    form.classList.add(formEditMovieClassName);
    titleInput.classList.add('form-control', 'mb-3');
    overviewTextarea.classList.add('form-control', 'mb-3');
    overviewTextarea.setAttribute('rows', 10);

    titleInput.value = '';
    overviewTextarea.value = '';

    titleInput.setAttribute('name', 'title');
    overviewTextarea.setAttribute('name', 'overview');

    form.append(
        titleInput,
        overviewTextarea,
        formSubmitButton
    );

    return form;
}