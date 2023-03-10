import React from 'react'
import AmountDisplay from './AmountDisplay'
import { useState, useEffect } from 'react'
import { formatAmount } from '../../../../utils/AmountUtils'

/*
Container for the exchange rates.
Calls the formatAmount function and sends the retruned values to AmountDisplay components.
formatAmount also determines the used multiplier
multiplierCallBack sets the multiplier state in Card
*/

const AmountContainer = ({ multiplierCallBack, exchangeRate }) => {
  const [pay, setPay] = useState(null)
  const [get, setGet] = useState(null)
  const [mid, setMid] = useState(null)

  useEffect(() => {
    const formattedAmount = formatAmount(exchangeRate)
    setPay(formattedAmount.buy)
    setGet(formattedAmount.sell)
    setMid(formattedAmount.mid)
    multiplierCallBack(formattedAmount.multiply)
  }, [exchangeRate, multiplierCallBack])

  return (
    <>
      <AmountDisplay message={'You pay:'} amount={pay} />
      <AmountDisplay message={'You get:'} amount={get} />
      <AmountDisplay message={'Mid:'} amount={mid} />
    </>
  )
}

export default AmountContainer
