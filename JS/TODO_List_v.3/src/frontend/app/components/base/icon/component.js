export function Icon(type, size = '') {
    const icon = document.createElement('i');

    icon.classList.add('fa');
    icon.classList.add(`fa-${type}`, `fa-${size}`);

    return icon;
}