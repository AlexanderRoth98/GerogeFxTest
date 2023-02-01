import React from 'react'

const Flag = ({ currency }) => {
  try {
    return <img id={`flag-${currency.toLowerCase()}`} className='border-black border-[0.5px] rounded-lg' src={require(`../../../../flags/${currency.toLowerCase().slice(0, 2)}.png`)} alt='country-flag' />
  } catch (err) {
    return (
      <img id={`flag-placeholder-${currency.toLowerCase()}`} className='border-black border-[0.5px] rounded-lg' width={70} height={47} src={require(`../../../../flags/placeholder.png`)} alt='placeholder-flag' />
    )
  }
}

export default Flag
