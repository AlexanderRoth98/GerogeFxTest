import React from 'react'
import Card from '../card/Card'

const ListItem = ({ data, index }) => {
  return (
    <li id='currency-list-item' className='py-4 content-center'>
      <div className=' mx-auto w-3/4 text-right'>Date exchange/baknote: {data.exchangeRate.lastModified}</div>
      <Card data={data} />
    </li>
  )
}

export default ListItem
