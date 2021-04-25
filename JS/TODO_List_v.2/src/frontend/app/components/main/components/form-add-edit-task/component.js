import {
    Button
} from "../../../base";

import styles from './styles.module.scss';

export function FormAddEditTask({
    contentTextButton,
    addSaveTask,
    formTaskClassName,
    taskValues = {}
}) {
    const form = document.createElement('form');

    const titleInput = document.createElement('input');
    const taskBody = document.createElement('textarea');
    const dedline = document.createElement('input');
    const formSubmitButton = Button({
        content: contentTextButton,
        type: 'submit'
    });

    form.addEventListener('submit', addSaveTask);

    form.classList.add(formTaskClassName);
    titleInput.classList.add('form-control', 'mb-3', 'form-title');
    taskBody.classList.add('form-control', 'mb-3', 'form-body');
    taskBody.setAttribute('rows', 5);
    dedline.classList.add('datetime-local');

    titleInput.value = taskValues.titleInput;
    taskBody.value = taskValues.taskBody;

    titleInput.setAttribute('name', 'title');
    taskBody.setAttribute('name', 'body');
    dedline.setAttribute('name', 'dedline');
    
    form.append(
        titleInput,
        taskBody,
        dedline,
        formSubmitButton
    );

    return form;
}