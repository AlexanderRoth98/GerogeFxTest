import React from 'react'

/* Display the amount with a message in front. */

const AmountDisplay = ({ message, amount }) => {
  return (
    <div id='exchange-info-area' className='flex justify-end'>
      {amount && (
        <>
          <div id='exchange-info-message' className='whitespace-pre-wrap w-3/4'>
            {message}
          </div>
          <div id='exchange-value' className={`ml-2 w-1/4 font-bold text-blue ${amount.length > 4 ? 'max-[740px]:text-sm max-[740px]:mt-[2.7px]' : ''}`}>
            {amount}
          </div>
        </>
      )}
    </div>
  )
}

export default AmountDisplay
