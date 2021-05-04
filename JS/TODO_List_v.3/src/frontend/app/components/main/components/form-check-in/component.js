import {
    AddTaskButton
} from "../creating-tasks-list/components";
import {
    OpenUserButton
} from "./components";
import styles from './styles.module.scss';

export function FormCheckIn({
    hasAddUserButton = true,
    hasOpenUserButton = true,
    hasFooterCloseButton = true
}) {
    const form = document.createElement('form');

    const userLabel = document.createElement('label');
    const userInput = document.createElement('input');

    const passwordLabel = document.createElement('label');
    const passwordInput = document.createElement('input');

    const btnContainer = document.createElement('div');

    form.classList.add(styles.formTodosCheckIn, 'form-check-in');

    userLabel.classList.add('mb-3', 'form-label');
    userInput.classList.add('form-control', 'mb-3');

    passwordLabel.classList.add('mb-3', 'form-label');
    passwordInput.classList.add('form-control', 'mb-3');

    userInput.setAttribute('required', '');
    userInput.setAttribute('name', 'user');
    userInput.setAttribute('maxlength', '6');
    userInput.setAttribute('placeholder', `Login`);

    passwordInput.setAttribute('required', '');
    passwordInput.setAttribute('maxlength', '4');
    passwordInput.setAttribute('name', 'password');
    passwordInput.setAttribute('type', 'password');
    passwordInput.setAttribute('placeholder', `Password`);

    userLabel.textContent = 'User:';
    passwordLabel.textContent = 'Password:';


    userLabel.append(userInput);
    passwordLabel.append(passwordInput);

    if (hasOpenUserButton) {
        btnContainer.append(OpenUserButton());
    };

    if (hasFooterCloseButton) {
        btnContainer.append(AddTaskButton());
    };

    if (hasAddUserButton) {
        btnContainer.append(AddTaskButton());
    };

    form.append(
        userLabel,
        passwordLabel,       
        btnContainer
    );

    return form;
}