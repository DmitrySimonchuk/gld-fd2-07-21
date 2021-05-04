import { Button } from "../../../button";
import { closeModal } from "../../helpers";

export function ModalHeader(title) {
    const modalHeader = document.createElement('div');

    modalHeader.classList.add('modal-header');
    modalHeader.append(ModalTitle(title), ModalCloseHeaderButton());

    return modalHeader;
}

function ModalTitle(title) {
    const modalTitle = document.createElement('h5');

    modalTitle.classList.add('modal-title');
    modalTitle.textContent = title;

    return modalTitle;
}

function ModalCloseHeaderButton() {
    const btn = Button({
        classlist: 'btn-close'
    });

    btn.addEventListener('click', closeModal);

    return btn;
}