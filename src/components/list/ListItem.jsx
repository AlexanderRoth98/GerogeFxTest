import React from 'react'
import Card from './card/Card'
import { formatDate } from '../../utils/DateUtils'

/* Returns a card component and a div containing the date of the exchange rate. */

const ListItem = ({ data, index }) => {
  return (
    <li id={`currency-list-item-${index}`} className='py-4 content-center'>
      <div id={`date-item-${index}`} className='mx-auto w-3/4 text-right'>
        Date: {formatDate(data.exchangeRate.lastModified)}
      </div>
      <Card data={data} />
    </li>
  )
}

export default ListItem
