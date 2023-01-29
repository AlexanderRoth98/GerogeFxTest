export function formatAmount(amount) {
    let formattedAmount = 1 / Number(amount)
    const string = formattedAmount.toString()
    const decimalIndex = string.indexOf('.')

    if (decimalIndex != '-1') {
        if (string[decimalIndex + 1] != '0')
            return formattedAmount.toFixed(2)
        let ok = false
        let index = 1

        while (!ok && index < 6) {
            if (string[decimalIndex + index] != '0') {
                ok = true
                return formattedAmount.toFixed(index)
            }
            index++
        }
    }

    return formattedAmount.toFixed(2)

}