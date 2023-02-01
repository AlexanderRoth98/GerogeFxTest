import React from 'react'
const AmountDisplay = ({ message, amount }) => {
  return (
    <div className='flex justify-end'>
      {amount && (
        <>
          <div className='whitespace-pre-wrap w-3/4'>{message}</div>
          <div className={`ml-2 w-1/4 font-bold text-blue ${amount.length > 4 ? 'max-[740px]:text-sm max-[740px]:mt-[2.7px]' : ''}`}>{amount}</div>
        </>
      )}
    </div>
  )
}

export default AmountDisplay
