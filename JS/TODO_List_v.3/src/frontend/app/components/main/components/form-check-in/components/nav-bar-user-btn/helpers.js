import {
    CheckIn
} from "../../../CheckIn";

export function updatePassword() {
    CheckIn({
        hasOpenUserButton: false,
        hasAddUserButton: false,
        hasDelUserButton: false,
        hasUpdatePassUserButton: true
    });
}

export function addUser() {
    CheckIn({
        hasOpenUserButton: false,
        hasAddUserButton: true,
        hasDelUserButton: false,
        hasUpdatePassUserButton: false
    });
}
export function deleteUser() {
    CheckIn({
        hasOpenUserButton: false,
        hasAddUserButton: false,
        hasDelUserButton: true,
        hasUpdatePassUserButton: false
    });
}