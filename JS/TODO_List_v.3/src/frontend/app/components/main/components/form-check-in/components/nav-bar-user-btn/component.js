import {
    updatePassword,
    addUser,
    deleteUser
} from './helpers';
import {
    Button
} from '../../../../../base';
import {
    textContentBtnCheckInForm
} from '../constant';
import stylesBtn from '../../../../../base/button/styles.module.scss';
import styles from './styles.module.scss';

export function AddNavBarUserButton() {
    const updateUserPassword = textContentBtnCheckInForm.UpdateUserPassword;
    const addNewUser = textContentBtnCheckInForm.addNewUser;
    const deleteOldUser = textContentBtnCheckInForm.DeleteOldUser;

    const btnWrapper = document.createElement('div');
    
    const updatePassBtn = Button({
        classlist: `${stylesBtn.myButton}`,
        content: updateUserPassword,
        type: 'submit',
        clickHandler: updatePassword
    });

    const addUserBtn = Button({
        classlist: `${stylesBtn.myButton}`,
        content: addNewUser,
        type: 'submit',
        clickHandler: addUser
    });

    const deleteUserBtn = Button({
        classlist: `${stylesBtn.myButton}`,
        content: deleteOldUser,
        type: 'submit',
        clickHandler: deleteUser
    });

    deleteUserBtn.classList.add('to-do-btn-danger');
    
    btnWrapper.classList.add(styles.btnGroupTodos, 'btn-group-vertical');

    btnWrapper.append(updatePassBtn, addUserBtn, deleteUserBtn);

    return btnWrapper;
}