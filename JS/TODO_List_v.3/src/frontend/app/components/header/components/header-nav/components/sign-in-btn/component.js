import {
    Button,
    Icon,
    IconTypes
} from "../../../../../base";
import {
    signOut
} from "./helpers";
import stylesBtn from '../../../../../base/button/styles.module.scss';
import styles from './styles.module.scss';

export function SignOutBtn() {
    const divUserId = document.createElement('div');

    const checkInWrapper = document.createElement('div');
    const checkInLogo = document.createElement('div');

    const checkInSignOut = Icon(IconTypes.SignOut, '1x').outerHTML;

    const btn = Button({
        classlist: `${stylesBtn.myButton}`,
        content: checkInSignOut,
        type: 'submit',
        clickHandler: signOut
    });

    checkInWrapper.classList.add(styles.checkInWrapper);

    divUserId.setAttribute('id', 'userId');

    divUserId.textContent = 'Guest';

    checkInLogo.append(Icon(IconTypes.User, '1x'));

    checkInWrapper.append(checkInLogo, divUserId, btn);

    return checkInWrapper;
}