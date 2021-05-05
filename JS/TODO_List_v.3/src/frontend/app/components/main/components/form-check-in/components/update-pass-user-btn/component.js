import {
    updateUserPass
} from './helpers';
import {
    Button
} from '../../../../../base';
import {
    textContentBtnCheckInForm
} from '../constant';
import stylesBtn from '../../../../../base/button/styles.module.scss';

export function UpdateUserPassButton() {
    const addUserBtnText = textContentBtnCheckInForm.SaveUpdatedPassword;

    const btn = Button({
        classlist: `${stylesBtn.myButton}`,
        content: addUserBtnText,
        type: 'submit',
        clickHandler: updateUserPass
    });

    return btn;
}