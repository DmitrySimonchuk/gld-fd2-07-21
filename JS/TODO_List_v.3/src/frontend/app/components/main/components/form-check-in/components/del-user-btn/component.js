import {
    delUser
} from './helpers';
import {
    Button
} from '../../../../../base';
import {
    textContentBtnCheckInForm
} from '../constant';
import stylesBtn from '../../../../../base/button/styles.module.scss';

export function DelUserButton() {
    const addUserBtnText = textContentBtnCheckInForm.DeleteOldUser;

    const btn = Button({
        classlist: `${stylesBtn.myButton}`,
        content: addUserBtnText,
        type: 'submit',
        clickHandler: delUser
    });

    btn.classList.add('to-do-btn-danger');

    return btn;
}