const moment = require('moment')

/*
In DateUtils.test.jsx one of the tests calls this with an invalid date. 
The warning is surpressed as the invalid date is intentional
*/

moment.suppressDeprecationWarnings = true

/*Formats UTC Date to desired format. */
export function formatDate(date) {
    return moment(date).format('DD.MM.YYYY HH:mm')
}





