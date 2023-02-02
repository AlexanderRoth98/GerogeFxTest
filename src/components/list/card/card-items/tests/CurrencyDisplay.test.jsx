import { render, screen } from '@testing-library/react'
import CurrencyDisplay from '../CurrencyDisplay'

describe('Currency Display', () => {
  it('returns the currency with no multiplier', () => {
    render(<CurrencyDisplay multiplier={1} currency={'RON'} />)
    const currency = screen.getByText('RON')

    expect(currency).toBeInTheDocument()
  })

  it('returns the currency with multiplier', () => {
    render(<CurrencyDisplay multiplier={10} currency={'RON'} />)
    const currency = screen.getByText('10 RON')

    expect(currency).toBeInTheDocument()
  })
})
