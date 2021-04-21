import { Button } from "../../../base";
import { formAddTaskClassName } from "./constans";
import { addTask } from "./helpers";

export function FormAddTask() {
    const form = document.createElement('form');

    const titleInput = document.createElement('input');
    const bodyTextarea = document.createElement('textarea');
    const formSubmitButton = Button({
        content: 'Add task',
        type: 'submit'
    });

    form.addEventListener('submit', addTask);

    form.classList.add(formAddTaskClassName);
    titleInput.classList.add('form-control', 'mb-3');
    bodyTextarea.classList.add('form-control', 'mb-3');

    titleInput.value = 'task title';
    bodyTextarea.value = 'task body';

    form.append(
        titleInput,
        bodyTextarea,
        formSubmitButton
    );

    return form;
}