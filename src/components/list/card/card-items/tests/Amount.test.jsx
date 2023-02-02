import { render, screen } from '@testing-library/react'
import AmountContainer from '../AmountContainer'

const mockExchangeRate = {
  buy: 4.066,
  middle: 4.166,
  sell: 4.266,
  indicator: 0,
  lastModified: '2018-11-08T23:00:00Z',
}

describe('Exchange label', () => {
  it('returns pay exchange label', () => {
    render(<AmountContainer multiplierCallBack={jest.fn()} exchangeRate={mockExchangeRate} />)
    const pay = screen.getByText(/pay/i)
    expect(pay).toBeInTheDocument()
  })

  it('returns get exchange label', () => {
    render(<AmountContainer multiplierCallBack={jest.fn()} exchangeRate={mockExchangeRate} />)
    const get = screen.getByText(/get/i)
    expect(get).toBeInTheDocument()
  })

  it('returns mid exchange label', () => {
    render(<AmountContainer multiplierCallBack={jest.fn()} exchangeRate={mockExchangeRate} />)
    const mid = screen.getByText(/mid/i)
    expect(mid).toBeInTheDocument()
  })
})

describe('Exchange rate', () => {
  it('returns pay exchange rate', () => {
    render(<AmountContainer multiplierCallBack={jest.fn()} exchangeRate={mockExchangeRate} />)
    const pay = screen.getByText('0.2459')
    expect(pay).toBeInTheDocument()
  })

  it('returns get exchange rate', () => {
    render(<AmountContainer multiplierCallBack={jest.fn()} exchangeRate={mockExchangeRate} />)
    const get = screen.getByText('0.2344')
    expect(get).toBeInTheDocument()
  })

  it('returns mid exchange rate', () => {
    render(<AmountContainer multiplierCallBack={jest.fn()} exchangeRate={mockExchangeRate} />)
    const mid = screen.getByText('0.2402')
    expect(mid).toBeInTheDocument()
  })
})
