import { Button } from "../../../button";
import { closeModal } from "../../helpers";

export function ModalFooter({
    hasFooterCloseButton,
    footerButtons
}) {
    const modalFooter = document.createElement('div');

    modalFooter.classList.add('modal-footer');

    if (hasFooterCloseButton) {
        modalFooter.append(ModalCloseFooterButton(hasFooterCloseButton));
    }

    footerButtons.forEach(btn => {
        modalFooter.append(btn);
    });

    return modalFooter;
}

function ModalCloseFooterButton() {
    const btn = Button({
        classlist: 'btn',
        content: 'Close'
    });

    btn.addEventListener('click', closeModal);

    return btn;
}