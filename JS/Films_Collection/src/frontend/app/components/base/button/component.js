export function Button({
    classlist = 'btn btn-primary',
    content = ''
}) {
    const btn = document.createElement('button');

    btn.setAttribute('type', 'button');
    btn.classList.add(...classlist.split(' '));
    btn.textContent = content;

    return btn;
}