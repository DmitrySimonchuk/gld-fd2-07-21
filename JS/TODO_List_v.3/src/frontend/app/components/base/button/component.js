import styles from './styles.module.scss';

export function Button({
    classlist = styles.myButton, 
    content = '',
    clickHandler,
    type = 'button'
}) {
    const btn = document.createElement('button');

    btn.setAttribute('type', type);
    btn.classList.add(...classlist.split(' '));
    btn.innerHTML = content;
    btn.classList.add('my-button');

    if (clickHandler) {
        btn.addEventListener('click', clickHandler);
    }

    return btn;
}