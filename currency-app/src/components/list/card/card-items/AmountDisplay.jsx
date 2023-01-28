import React from 'react'

const AmountDisplay = ({ message, amount }) => {
  let displayAmount = 1 / Number(amount)
  return (
    <div>
      <span>{message}</span>
      <span className='ml-2'>{displayAmount.toFixed(4)}</span>
    </div>
  )
}

export default AmountDisplay
