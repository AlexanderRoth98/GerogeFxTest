import { getByRole, render, screen } from '@testing-library/react'
import Flag from '../Flag'

describe('Flag', () => {
  it('returns country flag', () => {
    render(<Flag currency={'RON'} />)
    const flag = screen.getByRole('img', { name: 'country-flag' })
    expect(flag).toBeInTheDocument()
  })

  it('returns default flag', () => {
    render(<Flag currency={'XYZ'} />)
    const flag = screen.getByRole('img', { name: 'placeholder-flag' })
    expect(flag).toBeInTheDocument()
  })
})
