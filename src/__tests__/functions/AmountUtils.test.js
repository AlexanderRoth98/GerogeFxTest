import { formatAmount } from "../../utils/AmountUtils"

describe('Amount fromatting', () => {
    it('returns formatted amount', () => {
        const exchangeRate = {
            "buy": 4.5365,
            "middle": 4.6565,
            "sell": 4.7765,
            "indicator": 0,
            "lastModified": "2018-11-08T23:00:00Z"
        }
        const formattedAmount = formatAmount(exchangeRate)
        expect(formattedAmount).toEqual({ buy: '0.2204', sell: '0.2094', mid: '0.2149', multiply: 1 })
    })

    it('returns formatted amount with multiplier', () => {
        const exchangeRate = {
            "buy": 46490,
            "middle": 46500,
            "sell": 46510,
            "indicator": 0,
            "lastModified": "2008-05-01T22:00:00Z"
        }
        const formattedAmount = formatAmount(exchangeRate)
        console.log(formattedAmount)

        expect(formattedAmount).toEqual({ buy: '2.1510', sell: '2.1501', mid: '2.1505', multiply: 100000 })
    })


})
