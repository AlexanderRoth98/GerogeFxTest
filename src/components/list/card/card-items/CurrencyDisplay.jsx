import React from 'react'

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

  if (!content) content = <span>{currency}</span>

  return (
    <span id='currency' className={`font-bold text-2xl max-[740px]:text-base ${className}`}>
      {content}
    </span>
  )
}

export default CurrencyDisplay
