import {
    openUser
} from './helpers';
import {
    Button
} from '../../../../../base';
import stylesBtn from '../../../../../base/button/styles.module.scss';

export function OpenUserButton() {
    const open = 'Open';

    const btn = Button({
        classlist: `${stylesBtn.myButton}`,
        content: open,
        type: 'submit',
        clickHandler: openUser
    });

    return btn;
}