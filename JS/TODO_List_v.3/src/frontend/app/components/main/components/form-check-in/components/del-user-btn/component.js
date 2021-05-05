import {
    delUser
} from './helpers';
import {
    Button
} from '../../../../../base';
import stylesBtn from '../../../../../base/button/styles.module.scss';

export function DelUserButton() {
    const addUserBtnText = 'Delete User';

    const btn = Button({
        classlist: `${stylesBtn.myButton}`,
        content: addUserBtnText,
        type: 'submit',
        clickHandler: delUser
    });

    return btn;
}