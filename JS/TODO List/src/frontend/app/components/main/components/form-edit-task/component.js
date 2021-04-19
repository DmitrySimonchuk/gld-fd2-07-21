import { Button } from "../../../base";
import { formEditTaskClassName } from "./constans";
import { saveTask } from "./helpers";
import styles from './styles.module.scss';

export function FormEditTask() {
    const form = document.createElement('form');

    const titleInput = document.createElement('input');
    const bodyTextarea = document.createElement('textarea');
    const formSubmitButton = Button({
        content: 'Save',
        type: 'submit'
    });

    form.addEventListener('submit', saveTask);    

    form.classList.add(formEditTaskClassName);
    titleInput.classList.add('form-control', 'mb-3', 'form-title');
    bodyTextarea.classList.add('form-control', 'mb-3', 'form-body');
    bodyTextarea.setAttribute('rows', 5);

    titleInput.value = '';
    bodyTextarea.value = '';

    titleInput.setAttribute('name', 'title');
    bodyTextarea.setAttribute('name', 'body');

    form.append(
        titleInput,
        bodyTextarea,
        formSubmitButton
    );

    return form;
}