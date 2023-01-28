import React from 'react'
import Flag from './card-items/Flag'
import CurrencyDisplay from './card-items/CurrencyDisplay'
import AmountDisplay from './card-items/AmountDisplay'

const Card = ({ data }) => {
  return (
    <>
      <div className=' mx-auto w-3/4 text-right'>Date: {data.exchangeRate.lastModified}</div>
      <div id='card' className='bg-white mx-auto w-3/4 border-black border-[0.5px] rounded-xl text-black flex'>
        <div className='w-1/2 ml-3 py-1'>
          <div className='flex'>
            <Flag />
            <span className='ml-2'>
              <CurrencyDisplay currency={data.currency} />
            </span>
          </div>
          <div>{data.nameI18N}</div>
        </div>
        <div className='w-1/2 mr-3 py-2'>
          <div className='flex justify-end'>
            {/* <div className='mt-5'>{<div>{data.exchangeRate.lastModified}</div>}</div> */}
            <div className='ml-6 text-right'>
              <AmountDisplay message={'You pay:'} amount={data.exchangeRate.buy} />
              <AmountDisplay message={'You get:'} amount={data.exchangeRate.sell} />
              <AmountDisplay message={'Mid:'} amount={data.exchangeRate.middle} />
            </div>
            <div className='ml-6 mt-5'>
              <CurrencyDisplay currency={'EUR'} />
            </div>
          </div>

          {/* <div className=' '>
          <div className='flex float-right'>
            <div className=''>
              <span>You pay:</span>
              <AmountDisplay amount={data.exchangeRate.buy} />
            </div>
            <div>
              <sapn>You get:</sapn>
              <AmountDisplay amount={data.exchangeRate.sell} />
            </div>
          </div>
          <div className='flex'>
            
          </div>
        </div> */}
        </div>
        {/* {data.currency} {data.nameI18N} buy: {data.exchangeRate.buy} sell: {data.exchangeRate.sell} flag: {data.flags} flagAlt: {data.currency.slice(0, 2).toLowerCase()}{' '} */}
      </div>
    </>
  )
}

export default Card
