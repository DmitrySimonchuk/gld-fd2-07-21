import {
    Modal
} from "../../../base";
import {
    FormCheckIn
} from "../form-check-in";

export function CheckIn({
    hasOpenUserButton,
    hasAddUserButton,
    hasDelUserButton,
    hasUpdatePassUserButton
}) {

    const admin = localStorage.setItem('admin', '1111');
    const user1 = localStorage.setItem('user', '2222');

    const formCheckIn = FormCheckIn({
        hasOpenUserButton,
        hasAddUserButton,
        hasDelUserButton,
        hasUpdatePassUserButton
    })

    document.body.append(Modal({
        body: formCheckIn
    }));


}