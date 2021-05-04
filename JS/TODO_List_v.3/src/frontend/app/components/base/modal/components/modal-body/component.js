export function ModalBody(body) {
    const modalBody = document.createElement('div');

    modalBody.classList.add('modal-body');

    if (typeof body === 'string') {
        modalBody.innerHTML = body;
    } else {
        modalBody.append(body);
    }

    return modalBody;
}