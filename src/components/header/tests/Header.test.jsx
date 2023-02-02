import { render, screen } from '@testing-library/react'
import Header from '../Header'

describe('Header tests', () => {
  it('should return the app title', () => {
    render(<Header />)
    const headerTitle = screen.getByRole('heading', { name: /george/i })
    expect(headerTitle).toBeInTheDocument()
  })

  it('should return the author name', () => {
    render(<Header />)
    const name = screen.getByRole('heading', { name: /alexander/i })
    expect(name).toBeInTheDocument()
  })
})
