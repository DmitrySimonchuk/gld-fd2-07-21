import {
    openUser
} from './helpers';
import {
    Button
} from '../../../../../base';
import stylesBtn from '../../../../../base/button/styles.module.scss';

export function OpenUserButton() {
    const openUserBtnText = 'Open';

    const btn = Button({
        classlist: `${stylesBtn.myButton}`,
        content: openUserBtnText,
        type: 'submit',
        clickHandler: openUser
    });

    return btn;
}