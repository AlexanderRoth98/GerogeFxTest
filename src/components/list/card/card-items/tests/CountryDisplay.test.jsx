import { render, screen } from '@testing-library/react'
import CountryDisplay from '../CountryDisplay'
import userEvent from '@testing-library/user-event'

describe('One Country ', () => {
  it('returns the country name', () => {
    render(<CountryDisplay currency={'RON'} />)
    const country = screen.getByText('ROMANIA')
    expect(country).toBeInTheDocument()
  })
})

describe('Several Countries', () => {
  it('returns "several" label', () => {
    render(<CountryDisplay currency={'USD'} />)
    const severalLabel = screen.getByText(/several/i)
    expect(severalLabel).toBeInTheDocument()
  })

  it('returns info icon', () => {
    render(<CountryDisplay currency={'USD'} />)
    const infoIcon = screen.getByRole('img', { hidden: true })
    expect(infoIcon).toBeInTheDocument()
  })

  describe('Tooltip', () => {
    it('returns info icon tooltip not present', () => {
      render(<CountryDisplay currency={'USD'} />)

      const nullTooltip = screen.queryByRole('tooltip')

      expect(nullTooltip).not.toBeInTheDocument()
    })

    it('returns info icon tooltip present after hover', async () => {
      render(<CountryDisplay currency={'USD'} />)
      const user = userEvent.setup()

      const infoIcon = screen.getByRole('img', { hidden: true })

      await user.hover(infoIcon)
      const tooltip = await screen.findByRole('tooltip')

      expect(tooltip).toBeInTheDocument()
    })
  })
})
