import React from 'react'
import ListItem from './list-item/ListItem'

const CurrencyList = ({ data }) => {
  console.log(data)
  return <ul id='currency-list'>{data && data.fx.map((entry, index) => <ListItem data={entry} index={index} />)}</ul>
}

export default CurrencyList
