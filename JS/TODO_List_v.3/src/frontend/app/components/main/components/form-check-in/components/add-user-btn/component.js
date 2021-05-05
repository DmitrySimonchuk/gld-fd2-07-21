import {
    addUser
} from './helpers';
import {
    Button
} from '../../../../../base';
import {
    textContentBtnCheckInForm
} from '../constant';
import stylesBtn from '../../../../../base/button/styles.module.scss';

export function AddUserButton() {
    const addUserBtnText = textContentBtnCheckInForm.SaveUser;

    const btn = Button({
        classlist: `${stylesBtn.myButton}`,
        content: addUserBtnText,
        type: 'submit',
        clickHandler: addUser
    });

    return btn;
}