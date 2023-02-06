import React from 'react'

/* 
Displays the currecncy.
A multipilier is schown in front, but only if it's not 1
*/

const CurrencyDisplay = ({ className, multiplier, currency }) => {
  let content

  if (multiplier) {
    if (multiplier !== 1)
      content = (
        <span>
          {multiplier} {currency}
        </span>
      )
  }

  /* 
  In some cases the multiplier is undefined
  Nevertheless show the currecy.
  */

  if (!content) content = <span>{currency}</span>

  return (
    <span id='currency' className={`font-bold text-2xl max-[740px]:text-base ${className}`}>
      {content}
    </span>
  )
}

export default CurrencyDisplay
