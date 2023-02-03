import React from 'react'
import ListItem from './ListItem'

const CurrencyList = ({ data }) => {
  return data.fx.length > 0 ? (
    <ul id='currency-list'>
      {data.fx.map((entry, index) => (
        <ListItem key={`currency-item-${index}`} data={entry} index={index} />
      ))}
    </ul>
  ) : (
    <div id='invalid-search-criteria' className='text-center'>
      Search criteria invalid. Please select currencies from the select bar.
    </div>
  )
}

export default CurrencyList
