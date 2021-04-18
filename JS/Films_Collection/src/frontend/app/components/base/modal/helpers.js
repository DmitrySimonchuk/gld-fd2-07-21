export function closeModal(e) {
    return e.target.closest('.modal').remove();
}

// for tests
export function sum(a, b) {
    return a + b;
}