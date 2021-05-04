import {
    Modal
} from "../../../base";
import {
    FormCheckIn
} from "../form-check-in";

export function CheckIn() {

    const admin = localStorage.setItem('admin', '1111');
    const user1 = localStorage.setItem('user', '2222');

    const formCheckIn = FormCheckIn({
        hasOpenUserButton: true,
        hasAddUserButton: false,        
        hasFooterCloseButton: false
    })

    document.body.append(Modal({
        body: formCheckIn
    }));


}