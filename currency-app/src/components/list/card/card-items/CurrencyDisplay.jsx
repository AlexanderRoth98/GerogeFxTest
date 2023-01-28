import React from 'react'

const CurrencyDisplay = ({ currency }) => {
  return (
    <div id='currency' className='font-bold text-2xl'>
      {currency}
    </div>
  )
}

export default CurrencyDisplay
