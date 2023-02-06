/* 
Takes the value of 1 EUR in given currency and returns the value of EUR in 1 unit of the given currency.

If the resulting number has to many decimals, it is multiplied by a power of 10 with 4 fixed decimals.
*/

export function formatAmount(exchangeRate) {
    let buy = 1 / Number(exchangeRate.buy)
    let sell = 1 / Number(exchangeRate.sell)
    let mid = (buy + sell) / 2  /* Is recalculated from the transformed values. */

    let formattedExchangeRate = {}

    /* To determin the multiplier the buy value is used as reference. */
    const buyStringAmount = buy.toString()
    const decimalIndex = buyStringAmount.indexOf('.')

    if (decimalIndex !== '-1' && buyStringAmount[decimalIndex - 1] === '0') {/* If the number contains a decimal point and the digit prior is 0 */
        let ok = false
        let index = 1

        /* 
        Search for the first decimal that is not 0 and use it as a reference for the multiplier.
        If the first decimal is different from 0, no multiplication is necessary.
        */

        while (!ok) {
            if (buyStringAmount[decimalIndex + index] !== '0') {
                ok = true
                let multiply = index === 1 ? 1 : Math.pow(10, index)

                formattedExchangeRate.buy = (multiply * buy).toFixed(4)
                formattedExchangeRate.sell = (multiply * sell).toFixed(4)
                formattedExchangeRate.mid = (multiply * mid).toFixed(4)
                formattedExchangeRate.multiply = multiply

                return formattedExchangeRate
            }
            index++
        }
    }
    /* When the number is whole */
    else {
        formattedExchangeRate.buy = buy.toFixed(4)
        formattedExchangeRate.sell = sell.toFixed(4)
        formattedExchangeRate.mid = mid.toFixed(4)
        formattedExchangeRate.multiply = 1

        return formattedExchangeRate
    }
}