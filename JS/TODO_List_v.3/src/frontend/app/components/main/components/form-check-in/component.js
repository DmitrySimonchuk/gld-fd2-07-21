import {
    OpenUserButton,
    AddUserButton,
    DelUserButton,
    UpdateUserPassButton,
    AddNavBarUserButton
} from "./components";
import { 
    labelFormCheckIn 
} from "./constant";
import styles from './styles.module.scss';

export function FormCheckIn({    
    hasOpenUserButton = true,
    hasAddUserButton = true,
    hasDelUserButton = true,
    hasUpdatePassUserButton = true
}) {
    const form = document.createElement('form');

    const userLabel = document.createElement('label');
    const userInput = document.createElement('input');

    const passwordLabel = document.createElement('label');
    const passwordInput = document.createElement('input');

    const passwordRepeatLabel = document.createElement('label');
    const passwordRepeatInput = document.createElement('input');

    const btnContainer = document.createElement('div');
    const btnContainerAditionalBtn = document.createElement('div');

    form.classList.add(styles.formTodosCheckIn, 'form-check-in');

    userLabel.classList.add('mb-3', 'form-label');
    userInput.classList.add('form-control', 'mb-3');

    passwordLabel.classList.add('mb-3', 'form-label');
    passwordInput.classList.add('form-control', 'mb-3');

    passwordRepeatLabel.classList.add('mb-3', 'form-label');
    passwordRepeatInput.classList.add('form-control', 'mb-3');

    btnContainer.classList.add(styles.btnContainer);
    btnContainerAditionalBtn.classList.add(styles.btnContainer);

    userInput.setAttribute('required', '');
    userInput.setAttribute('name', 'user');
    userInput.setAttribute('maxlength', '6');
    userInput.setAttribute('placeholder', `Login`);

    passwordInput.setAttribute('required', '');
    passwordInput.setAttribute('maxlength', '4');
    passwordInput.setAttribute('name', 'password');
    passwordInput.setAttribute('type', 'password');
    passwordInput.setAttribute('placeholder', `Password`);

    passwordRepeatInput.setAttribute('required', '');
    passwordRepeatInput.setAttribute('maxlength', '4');
    passwordRepeatInput.setAttribute('name', 'passwordRepeat');
    passwordRepeatInput.setAttribute('type', 'password');
    passwordRepeatInput.setAttribute('placeholder', `Password`);

    userLabel.textContent = labelFormCheckIn.User;
    passwordLabel.textContent = labelFormCheckIn.Password;
    passwordRepeatLabel.textContent = labelFormCheckIn.RepeatPassword;

    userLabel.append(userInput);
    passwordLabel.append(passwordInput);
    
    form.append(
        userLabel,
        passwordLabel
    );

    if (hasOpenUserButton) {
        btnContainerAditionalBtn.append(AddNavBarUserButton());
        btnContainer.append(OpenUserButton(), btnContainerAditionalBtn);
    };

    if (hasAddUserButton) {
        passwordRepeatLabel.append(passwordRepeatInput);
        form.append(passwordRepeatLabel);
        btnContainer.append(AddUserButton());
    };

    if (hasDelUserButton) {
        passwordRepeatLabel.append(passwordRepeatInput);
        form.append(passwordRepeatLabel);
        btnContainer.append(DelUserButton());
    };

    if (hasUpdatePassUserButton) {
        passwordRepeatLabel.append(passwordRepeatInput);
        form.append(passwordRepeatLabel);
        btnContainer.append(UpdateUserPassButton());
    };

    form.append(       
        btnContainer
    );

    return form;
}