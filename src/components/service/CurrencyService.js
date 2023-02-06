export async function fetchCurrencyList(fetchCallback, currencyFilter) {
    let currencyList = {}
    let selectionList = []

    const url = 'https://run.mocky.io/v3/c88db14a-3128-4fbd-af74-1371c5bb0343'

    await fetch(url, {
        method: 'GET'
    })
        .then((response => {
            return response.json()
        }))
        .then((data) => (currencyList = data))
        .catch((err) => {
            currencyList.error = err
        })


    if (!currencyList.error) {
        /*Sort response by currency */
        currencyList.fx.sort((a, b) => {
            if (a.currency < b.currency) {
                return -1
            }
            else {
                return 1
            }
        })

        cleanCurrencyList(currencyList)
        getAvailableOptions(currencyList, selectionList)

        if (currencyFilter)
            filterCurrecyList(currencyList, currencyFilter)
    }

    fetchCallback(currencyList, selectionList)
}

/* Remove any data with missing exchange and unallowerd currencies */
const cleanCurrencyList = (currencyList) => {
    currencyList.fx = currencyList.fx.filter(entry => entry.exchangeRate && entry.currency.trim().length !== 0 && entry.currency !== 'EUR')
}

/* Get all search options */
const getAvailableOptions = (currencyList, selectionList) => {
    currencyList.fx.forEach((entry) => {
        selectionList.push(entry.currency)
    })
}

/* Apply filter after search or deep linking */
const filterCurrecyList = (currencyList, filter) => {

    let options = filter.toUpperCase().split('&')

    currencyList.fx = currencyList.fx.filter(entry => options.includes(entry.currency))

}