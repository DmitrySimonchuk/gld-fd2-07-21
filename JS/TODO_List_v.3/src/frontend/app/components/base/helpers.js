import { startLoadingSpinner, stopLoadingSpinner } from "./spinner";

export function fetchWithLoader(...args){
    const timerId = setTimeout(function(){
        startLoadingSpinner();
    }, 300);

    return fetch(...args)
        .then(result => {
            clearTimeout(timerId);
            stopLoadingSpinner();
            return result;
        })
        .catch(error => {
            clearTimeout(timerId);
            stopLoadingSpinner();
            throw error;
        });
}

export function debounce(func, wait) {    
    let timeout;

    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    }
}