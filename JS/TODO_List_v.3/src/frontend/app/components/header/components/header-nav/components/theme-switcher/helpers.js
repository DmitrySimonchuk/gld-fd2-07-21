export function changeTheme({
    target: {
        checked
    }
}) {
    if (checked) {
        localStorage.setItem('theme', 'dark');
        document.body.classList.add('theme-dark');
        document.body.classList.remove('theme-light');
    } else {
        localStorage.setItem('theme', 'light');
        document.body.classList.add('theme-light');
        document.body.classList.remove('theme-dark');
    };
}