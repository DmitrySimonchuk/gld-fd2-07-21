export function createDateInNewFormat_DD_MM_YYYY_HH_MM(time) {
    const year = new Date(time).getFullYear();

    let date = new Date(time).getDate() + '';
    let month = new Date(time).getMonth() + '';
    let hour = new Date(time).getHours() + '';
    let minute = new Date(time).getMinutes() + '';    

    date = date.padStart(2, '0');
    month = month.padStart(2, '0');
    hour = hour.padStart(2, '0');
    minute = minute.padStart(2, '0');    

    const newFormatDate = date + '.' + month + '.' + year + ' \n' + hour + ':' + minute;

    return newFormatDate;
} 