import { render, screen } from '@testing-library/react'
import Header from '../components/header/Header'

describe('Header', () => {
  it('returns the app title', () => {
    render(<Header />)
    const headerTitle = screen.getByRole('heading', { name: /george/i })
    expect(headerTitle).toBeInTheDocument()
  })

  it('returns the author name', () => {
    render(<Header />)
    const name = screen.getByRole('heading', { name: /alexander/i })
    expect(name).toBeInTheDocument()
  })
})
