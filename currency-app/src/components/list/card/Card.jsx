import React from 'react'
import { useState } from 'react'
import Flag from './card-items/Flag'
import CurrencyDisplay from './card-items/CurrencyDisplay'

import AmountContainer from './card-items/AmountContainer'

const Card = ({ data }) => {
  const [multiplier, setMultiplier] = useState(null)

  return (
    <div id='card' className='bg-white mx-auto w-3/4 border-black border-[0.5px] rounded-xl text-black flex'>
      <div className='w-1/2 ml-3 py-1'>
        <div className='flex'>
          <Flag currency={data.currency} />
          <CurrencyDisplay className='ml-2' multiplier={multiplier} currency={data.currency} />
        </div>
        <div className='mt-2'>{data.nameI18N}</div>
      </div>
      <div className='w-1/2 mr-3 py-2 flex justify-end'>
        <div className='ml-6 text-right'>
          <AmountContainer multiplierCallBack={setMultiplier} exchangeRate={data.exchangeRate} />
        </div>
        <CurrencyDisplay className='max-[600px]:mt-[49px] min-[600px]:mt-5 ml-8' currency={'EUR'} />
      </div>
      {/* {data.currency} {data.nameI18N} buy: {data.exchangeRate.buy} sell: {data.exchangeRate.sell} flag: {data.flags} flagAlt: {data.currency.slice(0, 2).toLowerCase()}{' '} */}
    </div>
  )
}

export default Card
