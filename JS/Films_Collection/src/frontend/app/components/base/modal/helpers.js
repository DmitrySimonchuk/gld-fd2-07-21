export function closeModal(e) {
    return e.target.closest('.modal').remove();
}

// for tests
function sum(a, b) {
    return a + b;
}