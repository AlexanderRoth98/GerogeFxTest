import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Card from '../components/list/card/Card'
import dataOk from './card-data-mocks/dataOk.json'
import dataNoFlag from './card-data-mocks/dataNoFlag.json'
import dataWithMultiplier from './card-data-mocks/dataWithMultiplier.json'
import dataWithSeveralCountries from './card-data-mocks/dataWithSeveralCountries.json'

describe('Card', () => {
  //Flag block

  describe('Flag', () => {
    it('returns country flag', () => {
      render(<Card data={dataOk} />)
      const flag = screen.getByRole('img', { name: 'country-flag' })
      expect(flag).toBeInTheDocument()
    })

    it('returns default flag', () => {
      render(<Card data={dataNoFlag} />)
      const flag = screen.getByRole('img', { name: 'placeholder-flag' })
      expect(flag).toBeInTheDocument()
    })
  })

  // Currency Block

  describe('Currency Display', () => {
    it('returns the currency with no multiplier', () => {
      render(<Card data={dataOk} />)
      const currency = screen.getByText('RON')

      expect(currency).toBeInTheDocument()
    })

    it('returns the currency with multiplier', () => {
      render(<Card data={dataWithMultiplier} />)
      const currency = screen.getByText('100000 ZWD')

      expect(currency).toBeInTheDocument()
    })
  })

  // Country Name block

  describe('Country name', () => {
    describe('One Country ', () => {
      it('returns the country name', () => {
        render(<Card data={dataOk} />)
        const country = screen.getByText('ROMANIA')
        expect(country).toBeInTheDocument()
      })
    })

    describe('Several Countries', () => {
      it('returns "several" label', () => {
        render(<Card data={dataWithSeveralCountries} />)
        const severalLabel = screen.getByText(/several/i)
        expect(severalLabel).toBeInTheDocument()
      })

      it('returns info icon', () => {
        render(<Card data={dataWithSeveralCountries} />)
        const infoIcon = screen.getByRole('info')
        expect(infoIcon).toBeInTheDocument()
      })

      describe('Tooltip', () => {
        it('returns info icon tooltip not present', () => {
          render(<Card data={dataWithSeveralCountries} />)

          const nullTooltip = screen.queryByRole('tooltip')

          expect(nullTooltip).not.toBeInTheDocument()
        })

        it('returns info icon tooltip present after hover', async () => {
          render(<Card data={dataWithSeveralCountries} />)
          const user = userEvent.setup()

          const infoIcon = screen.getByRole('info')

          await user.hover(infoIcon)
          const tooltip = await screen.findByRole('tooltip')

          expect(tooltip).toBeInTheDocument()
        })
      })
    })
  })

  //Exchange rates block

  describe('Exchange rates block', () => {
    describe('Exchange label', () => {
      it('returns pay exchange label', () => {
        render(<Card data={dataOk} />)
        const pay = screen.getByText(/pay/i)
        expect(pay).toBeInTheDocument()
      })

      it('returns get exchange label', () => {
        render(<Card data={dataOk} />)
        const get = screen.getByText(/get/i)
        expect(get).toBeInTheDocument()
      })

      it('returns mid exchange label', () => {
        render(<Card data={dataOk} />)
        const mid = screen.getByText(/mid/i)
        expect(mid).toBeInTheDocument()
      })
    })

    describe('Exchange rate', () => {
      it('returns pay exchange rate', () => {
        render(<Card data={dataOk} />)
        const pay = screen.getByText('0.2204')
        expect(pay).toBeInTheDocument()
      })

      it('returns get exchange rate', () => {
        render(<Card data={dataOk} />)
        const get = screen.getByText('0.2094')
        expect(get).toBeInTheDocument()
      })

      it('returns mid exchange rate', () => {
        render(<Card data={dataOk} />)
        const mid = screen.getByText('0.2149')
        expect(mid).toBeInTheDocument()
      })
    })
  })
})
