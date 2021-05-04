import styles from './styles.module.scss';

function Spinner() {
    const spinner = document.createElement('i');

    spinner.className = 'fa fa-3x fa-cog fa-spin';
    spinner.classList.add(styles.spinner);

    return spinner;
}

export function LoadingSpinner() {
    const spinner = Spinner();

    spinner.classList.add('loading');

    return spinner;
}

export function startLoadingSpinner() {
    document.body.append(LoadingSpinner());
}

export function stopLoadingSpinner() {
    document.querySelector('i.loading')?.remove();
}