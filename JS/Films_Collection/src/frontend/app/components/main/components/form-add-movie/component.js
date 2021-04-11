import {
    Button
} from "../../../base/button";
import { formAddMovieClassName } from "./constans";
import { addMovie } from "./helpers";
import styles from './styles.module.scss';

export function FormAddMovie() {
    const form = document.createElement('form');

    const titleInput = document.createElement('input');
    const descriptionTextarea = document.createElement('textarea');
    const formSubmitButton = Button({
        content: 'Add movie',
        clickHandler: addMovie,
        type: 'submit'
    });

    form.classList.add(formAddMovieClassName);
    titleInput.classList.add('form-control', 'mb-3');
    descriptionTextarea.classList.add('form-control', 'mb-3');

    titleInput.value = '50 pipipez';
    descriptionTextarea.value = '50 pipipez Reliez';

    form.append(
        titleInput,
        descriptionTextarea,
        formSubmitButton
    );

    return form;
}