const moment = require('moment');
moment.suppressDeprecationWarnings = true

export function formatDate(date) {
    return moment(date).format('DD.MM.YYYY HH:mm')
}





