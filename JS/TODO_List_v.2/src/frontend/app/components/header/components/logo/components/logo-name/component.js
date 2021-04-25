import styles from './styles.module.scss';

export function LogoName() {
    const logoName = document.createElement('div');

    logoName.classList.add(styles.logoName);
    logoName.textContent = 'My To Do List';

    return logoName;
}