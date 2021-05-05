import {
    closeModal
} from "../../../../../base";
import {
    CheckIn
} from "../../../CheckIn";

export function delUser(e) {

    e.preventDefault()

    const form = e.target.closest('form');

    const {
        user: userIdEl,
        password: passEl,
        passwordRepeat: passRepeatEl,
    } = form.elements;

    const userId = userIdEl.value;
    const pass = passEl.value;
    const passRepeat = passRepeatEl.value;

    if (localStorage.getItem(userId) && pass === passRepeat && localStorage.getItem(userId) === pass) {
        
        localStorage.removeItem(userId);

        closeModal(e);

        $.alert({
            title: 'Alert!',
            content: 'User deleted!'
        });

        CheckIn({
            hasOpenUserButton: true,
            hasAddUserButton: false,
            hasDelUserButton: false,
            hasUpdatePassUserButton: false
        });

    } else {
        $.alert({
            title: 'Alert!',
            content: 'Repeat password!'
        });
    }
}