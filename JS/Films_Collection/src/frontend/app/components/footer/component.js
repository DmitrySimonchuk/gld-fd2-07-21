import { Logo } from '../header/components/logo'

export function Footer() {
    const footer = document.createElement('footer');

    footer.append(Logo());

    return footer;
}