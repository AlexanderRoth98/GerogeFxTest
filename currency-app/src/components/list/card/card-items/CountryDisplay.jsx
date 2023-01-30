import React from 'react'
import { mapCurrencyToCountry } from '../../../../mapping/CurrencyMapping'

const CountryDisplay = ({ currency }) => {
  let countries = mapCurrencyToCountry(currency)

  return countries.length == 1 ? (
    <div>
      {countries.map((country) => {
        return <span>{country}</span>
      })}
    </div>
  ) : (
    <div>
      {countries.map((country) => {
        return <span>{country}</span>
      })}
    </div>
  )
}

export default CountryDisplay
