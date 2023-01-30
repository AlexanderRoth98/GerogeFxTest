export function formatAmount(exchangeRate) {
    let buy = 1 / Number(exchangeRate.buy)
    let sell = 1 / Number(exchangeRate.sell)
    let mid = (buy + sell) / 2

    let formattedExchangeRate = {}

    const buyStringAmount = buy.toString()
    const decimalIndex = buyStringAmount.indexOf('.')

    if (decimalIndex != '-1' && buyStringAmount[decimalIndex - 1] == '0') {
        let ok = false
        let index = 1

        while (!ok) {
            if (buyStringAmount[decimalIndex + index] != '0') {
                ok = true
                let multiply = index == 1 ? Math.pow(10, (index - 1)) : Math.pow(10, index)

                formattedExchangeRate.buy = (multiply * buy).toFixed(4)
                formattedExchangeRate.sell = (multiply * sell).toFixed(4)
                formattedExchangeRate.mid = (multiply * mid).toFixed(4)
                formattedExchangeRate.multiply = multiply

                return formattedExchangeRate
            }
            index++
        }
    }
    else {
        formattedExchangeRate.buy = buy.toFixed(4)
        formattedExchangeRate.sell = sell.toFixed(4)
        formattedExchangeRate.mid = mid.toFixed(4)
        formattedExchangeRate.multiply = 1

        return formattedExchangeRate
    }
}