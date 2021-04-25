import { ModalBody, ModalFooter, ModalHeader } from './components';
import styles from './styles.module.scss';

export function Modal({
    title,
    body,
    hasFooterCloseButton,
    footerButtons = []
}) {
    document.querySelector('.modal')?.remove();

    const modal = document.createElement('div');

    modal.classList.add('modal', styles.show);
    modal.setAttribute('tabindex', '-1');

    modal.append(ModalDialog({
        title,
        body,
        hasFooterCloseButton,
        footerButtons
    }));
    return modal;
};

function ModalDialog({
    title,
    body,
    hasFooterCloseButton,
    footerButtons
}) {
    const modalDialog = document.createElement('div');

    modalDialog.classList.add('modal-dialog');
    modalDialog.append(ModalContent({
        title,
        body,
        hasFooterCloseButton,
        footerButtons
    }));

    return modalDialog;
}

function ModalContent({
    title,
    body,
    hasFooterCloseButton,
    footerButtons
}) {
    const modalContent = document.createElement('div');

    modalContent.classList.add('modal-content');
    modalContent.append(ModalHeader(title), ModalBody(body));
    if (footerButtons.length) {
        modalContent.append(ModalFooter({
            hasFooterCloseButton,
            footerButtons
        }));
    } 
    
    return modalContent;
}