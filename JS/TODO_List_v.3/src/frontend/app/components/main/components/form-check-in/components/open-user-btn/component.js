import {
    openUser
} from './helpers';
import {
    Button
} from '../../../../../base';
import {
    textContentBtnCheckInForm
} from '../constant';
import stylesBtn from '../../../../../base/button/styles.module.scss';

export function OpenUserButton() {
    const openUserBtnText = textContentBtnCheckInForm.OpenUser;

    const btn = Button({
        classlist: `${stylesBtn.myButton}`,
        content: openUserBtnText,
        type: 'submit',
        clickHandler: openUser
    });

    return btn;
}