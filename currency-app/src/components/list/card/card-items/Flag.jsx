import React from 'react'

const Flag = ({ currency }) => {
  try {
    return <img className='border-black border-[0.5px] rounded-lg' src={require(`../../../../flags/${currency.toLowerCase().slice(0, 2)}.png`)} />
  } catch (err) {
    return <>error</>
  }
}

export default Flag
