import React from 'react'

const CurrencyList = ({ data }) => {
  console.log(data)
  return (
    <ul id='currency-list' className=''>
      {data &&
        data.fx.map((entry) => (
          <li>
            {entry.currency} {entry.nameI18N} buy: {entry.exchangeRate.buy} sell: {entry.exchangeRate.sell} flag: {entry.flags} flagAlt: {entry.currency.slice(0, 2).toLowerCase()}
          </li>
        ))}
    </ul>
  )
}

export default CurrencyList
