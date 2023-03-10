import React from 'react'
import { useState } from 'react'
import Flag from './card-items/Flag'
import CurrencyDisplay from './card-items/CurrencyDisplay'

import AmountContainer from './card-items/AmountContainer'
import CountryDisplay from './card-items/CountryDisplay'

/* 
Puts toghter all parts necessary for the list item.
Props are passed acordingly to smaller components.

The card is split in two areas: left side and right side.
Left side is split in top left and bottom left.

Some exchange rates have a lot of decimals. In that case they are being multiplied by a multiplier.
The multiplier may appear in this case in the left side.
Ex: 1 ZWD = 0,00002151 EUR => 100000 ZWD = 2.1510 EUR
*/

const Card = ({ data }) => {
  const [multiplier, setMultiplier] = useState(null)

  return (
    <div id={`card-${data.currency.toLowerCase()}`} className='bg-white mx-auto w-3/4 border-black border-[0.5px] rounded-xl text-black flex'>
      <div id='card-left-side' className='w-1/2 ml-3 py-1'>
        <div id='card-left-top-area' className='flex'>
          <Flag currency={data.currency} />
          <CurrencyDisplay className='ml-2' multiplier={multiplier} currency={data.currency} />
        </div>

        <div id='card-left-bottom-area' className='mt-2'>
          <CountryDisplay currency={data.currency} />
        </div>
      </div>

      <div id='card-right-side' className='w-1/2 mr-3 py-2 flex justify-end'>
        <div id='rates-container' className='ml-6 text-right'>
          <AmountContainer multiplierCallBack={setMultiplier} exchangeRate={data.exchangeRate} />
        </div>
        <CurrencyDisplay className='max-[576px]:mt-[49px] min-[576px]:mt-5 ml-8' currency={'EUR'} />
      </div>
    </div>
  )
}

export default Card
