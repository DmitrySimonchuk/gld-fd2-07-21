import { Content } from './components/content';
import styles from './styles.module.scss';

export function Main() {
    const main = document.createElement('main');

    main.append(Content());

    return main;
}