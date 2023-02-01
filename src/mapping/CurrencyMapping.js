import data from '../mapping/codes-all.json'

export function mapCurrencyToCountry(currency) {
    let countries = []

    data.forEach((entry) => {
        if (entry.AlphabeticCode === currency)
            if (!countries.includes(entry.Entity))
                countries.push(entry.Entity)
    })

    return countries
}