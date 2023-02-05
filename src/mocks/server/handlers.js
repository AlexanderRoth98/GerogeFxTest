import { rest } from 'msw'

export const handlers = [
    rest.get('https://run.mocky.io/v3/c88db14a-3128-4fbd-af74-1371c5bb0343', (req, res, ctx) => {
        return res(
            ctx.json(
                {
                    "institute": 198,
                    "lastUpdated": "2018-11-09T15:07:00Z",
                    "comparisonDate": "2018-11-09T12:45:00Z",
                    "baseCurrency": "EUR",
                    "fx": [
                        {
                            "currency": "AED",
                            "precision": 2,
                            "nameI18N": "Dirham",
                            "exchangeRate": {
                                "buy": 4.066,
                                "middle": 4.166,
                                "sell": 4.266,
                                "indicator": 0,
                                "lastModified": "2018-11-08T23:00:00Z"
                            },
                            "banknoteRate": {
                                "buy": 3.9075,
                                "middle": 4.219,
                                "sell": 4.5305,
                                "indicator": 0,
                                "lastModified": "2018-11-06T23:00:00Z"
                            },
                            "flags": [
                                "provided"
                            ]
                        },
                        {
                            "currency": "RON",
                            "precision": 2,
                            "nameI18N": "Romanian Leu New",
                            "exchangeRate": {
                                "buy": 4.5365,
                                "middle": 4.6565,
                                "sell": 4.7765,
                                "indicator": 0,
                                "lastModified": "2018-11-08T23:00:00Z"
                            },
                            "banknoteRate": {
                                "buy": 4.412,
                                "middle": 4.662,
                                "sell": 4.912,
                                "indicator": 0,
                                "lastModified": "2018-11-06T23:00:00Z"
                            },
                            "flags": [
                                "provided"
                            ]
                        },
                        {
                            "currency": "ROL",
                            "precision": 0,
                            "banknoteRate": {
                                "buy": 44500,
                                "middle": 48000,
                                "sell": 51500,
                                "indicator": 0,
                                "lastModified": "2007-06-05T22:00:00Z"
                            }
                        },
                        {
                            "currency": "AFN",
                            "precision": 2,
                            "nameI18N": "Afghan Afghani",
                            "exchangeRate": {
                                "buy": 78.6653,
                                "middle": 86.1653,
                                "sell": 93.6653,
                                "indicator": 0,
                                "lastModified": "2018-11-08T23:00:00Z"
                            },
                            "flags": [
                                "provided"
                            ]
                        },
                        {
                            "currency": "   ",
                            "precision": 2,
                            "banknoteRate": {
                                "buy": 882.5,
                                "middle": 882.5,
                                "sell": 882.5,
                                "indicator": 0,
                                "lastModified": "2008-08-06T22:00:00Z"
                            },
                            "flags": [
                                "provided"
                            ]
                        },
                    ]
                }
            )
        )
    }),
]
