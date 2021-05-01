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
/*
export function createDateInNewFormat_YYYY_MM_DDTHH_mm(time) {
    const year = new Date(time).getFullYear();

    let date = new Date(time).getDate() + '';
    let month = new Date(time).getMonth() + 1 + '';
    let hour = new Date(time).getHours() + '';
    let minute = new Date(time).getMinutes() + '';

    date = date.padStart(2, '0');
    month = month.padStart(2, '0');
    hour = hour.padStart(2, '0');
    minute = minute.padStart(2, '0');

    const newFormatDate = date + '.' + month + '.' + year + ' \n' + hour + ':' + minute;

    return newFormatDate;
}*/