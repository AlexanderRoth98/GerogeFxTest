
const moment = require('moment');

export function formatDate(date) {
    return moment(date).format('DD.MM.YYYY HH:mm');
}





