import {
    closeModal
} from "../../../../../base";
import {
    CheckIn
} from "../../../CheckIn";

export function addUser(e) {

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

    if (localStorage.getItem(userId)) {
        $.alert({
            title: 'Alert!',
            content: 'User already registered!'
        });
    } else if (!(localStorage.getItem(userId)) && pass === passRepeat) {
        localStorage.setItem(userId, pass);

        closeModal(e);
        
        $.alert({
            title: 'Alert!',
            content: 'User added!'
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