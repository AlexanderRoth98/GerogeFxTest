import React from 'react'

const CurrencyDisplay = ({ className, currency }) => {
  return (
    <div id='currency' className={`font-bold text-2xl ${className}`}>
      {currency}
    </div>
  )
}

export default CurrencyDisplay
