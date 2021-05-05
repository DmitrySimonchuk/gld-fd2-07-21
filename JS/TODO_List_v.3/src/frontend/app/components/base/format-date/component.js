export function createDateInNewFormat_DD_MM_YYYY_HH_MM(time) {
    let date = new Date(time);

    let formatter = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric"
    });

    date = (formatter.format(date)); 

    return date;
}

export function createDateInNewFormat_DD_MM_YYYY(time) {    
    let date = new Date(time);

    let formatter = new Intl.DateTimeFormat("en-US", {        
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric"
    });

    date = (formatter.format(date)); 

    return date;
}

export function createDateInNewFormat_HH_MM(time) {
    let date = new Date(time);

    let formatter = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",        
    });

    date = (formatter.format(date)); 

    return date;
}

export function createDateInNewFormat_ms(time) {
    
    let date = Date.parse(time);

    return date;
}

export function createDateInMachFormat(ms) {

    const date = new Date(+ms).toISOString().substr(0, 16);

    return date;
}