import styles from './styles.module.scss';

export function Copyright() {
    const copyright = document.createElement('div');
    const copy = String.fromCharCode(169);
    const trade = String.fromCharCode(8482);

    copyright.textContent = `${copy} Copyright Dmitry Simanchuk ${trade}`;
    copyright.classList.add(styles.copyright);

    return copyright;
}