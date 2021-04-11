// func optimiz page, after end enter
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

// func optimiz page, ever 500 ms
export function throttle(callback, delay) {   
    let throttleTimeout = null;
    let storedEvent = null;

    const throttledEventHandler = event => {
        storedEvent = event;

        const shouldHandleEvent = !throttleTimeout;

        if (shouldHandleEvent) {
            callback(storedEvent);

            storedEvent = null;

            throttleTimeout = setTimeout(() => {
                throttleTimeout = null;

                if (storedEvent) {
                    throttledEventHandler(storedEvent);
                }
            }, delay);
        }
    };

    return throttledEventHandler;
}

export function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}