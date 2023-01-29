import React from 'react'
import Flag from './card-items/Flag'
import CurrencyDisplay from './card-items/CurrencyDisplay'
import AmountDisplay from './card-items/AmountDisplay'

const Card = ({ data }) => {
  return (
    <div id='card' className='bg-white mx-auto w-3/4 border-black border-[0.5px] rounded-xl text-black flex'>
      <div className='w-1/2 ml-3 py-1'>
        <div className='flex'>
          <Flag />
          <CurrencyDisplay className='ml-2' currency={data.currency} />
        </div>
        <div>{data.nameI18N}</div>
      </div>
      <div className='w-1/2 mr-3 py-2 flex justify-end'>
        <div className='ml-6 text-right'>
          <AmountDisplay message={'You pay:'} amount={data.exchangeRate.buy} />
          <AmountDisplay message={'You get:'} amount={data.exchangeRate.sell} />
          <AmountDisplay message={'Mid:'} amount={data.exchangeRate.middle} />
        </div>
        <CurrencyDisplay className='max-[600px]:mt-11 min-[600px]:mt-5 ml-7' currency={'EUR'} />
      </div>
      {/* {data.currency} {data.nameI18N} buy: {data.exchangeRate.buy} sell: {data.exchangeRate.sell} flag: {data.flags} flagAlt: {data.currency.slice(0, 2).toLowerCase()}{' '} */}
    </div>
  )
}

export default Card
