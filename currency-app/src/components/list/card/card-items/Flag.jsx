import React from 'react'

const Flag = ({ currency }) => {
  try {
    return <img src={require(`../../../../flags/${currency.toLowerCase().slice(0, 2)}.png`)} />
  } catch (err) {
    return <>error</>
  }
}

export default Flag
