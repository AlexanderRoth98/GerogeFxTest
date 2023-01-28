import React from 'react'
import Card from '../card/Card'

const ListItem = ({ data, index }) => {
  return (
    <li id='currency-list-item' key={`currency-item-${index}`} className='py-4 content-center'>
      <Card data={data} />
    </li>
  )
}

export default ListItem
