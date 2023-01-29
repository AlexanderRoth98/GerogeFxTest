import React from 'react'
import { formatAmount } from '../../../../utils/AmountUtils'
const AmountDisplay = ({ message, amount }) => {
  const displayAmount = formatAmount(amount)
  return (
    <div className='flex justify-end'>
      <div className='whitespace-pre-wrap w-3/4'>{message}</div>
      <div
        className={`ml-2 w-1/4 font-bold text-blue ${displayAmount.length > 6 ? 'text-xs mt-[2.7px] max-[600px]:text-[10px] max-[600px]:mt-1' : ''} ${
          displayAmount.length > 4 && displayAmount.length <= 6 ? 'max-[600px]:text-sm max-[600px]:mt-[2.7px]' : ''
        }`}
      >
        {displayAmount}
      </div>
    </div>
  )
}

export default AmountDisplay
