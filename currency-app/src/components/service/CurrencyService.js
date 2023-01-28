
export async function fetchCurrencyList(fetchCallback) {
    let currencyList
    const url = 'https://run.mocky.io/v3/c88db14a-3128-4fbd-af74-1371c5bb0343'

    await fetch(url, {
        method: 'GET'
    })
        .then((response => {
            return response.json()
        }))
        .then((data) => (currencyList = data))
        .catch((err) => {
            console.log(err.message)
        })

    currencyList.fx.sort((a, b) => {
        if (a.currency < b.currency) {
            return -1
        }
        else {
            return 1
        }
    })



    cleanCurrencyList(currencyList)



    fetchCallback(currencyList)
}

const cleanCurrencyList = (currencyList) => {

    currencyList.fx = currencyList.fx.filter(entry => entry.exchangeRate)
}