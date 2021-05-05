import {
    CheckIn
} from "../../../../../main/components/CheckIn";

export function signOut() {

    const divUserId = document.getElementById('userId');
    
    divUserId.textContent = 'Guest';

    while (document.querySelector('.task-row-content')) {
        document.querySelector('.task-row-content').remove();
    }

    CheckIn({
        hasOpenUserButton: true,
        hasAddUserButton: false,
        hasDelUserButton: false,
        hasUpdatePassUserButton: false
    });
}