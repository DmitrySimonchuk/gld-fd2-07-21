export function Button({
    classlist = 'btn btn-primary',
    content = '',
    clickHandler,
    type = 'button'
}) {
    const btn = document.createElement('button');

    btn.setAttribute('type', type);
    btn.classList.add(...classlist.split(' '));
    btn.innerHTML = content;

    if (clickHandler) {
        btn.addEventListener('click', clickHandler);
    }

    return btn;
}