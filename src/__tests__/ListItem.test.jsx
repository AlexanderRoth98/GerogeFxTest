import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ListItem from '../components/list/ListItem'
import dataOk from '../mocks/list-entry/dataOk.json'
import dataNoFlag from '../mocks/list-entry/dataNoFlag.json'
import dataWithMultiplier from '../mocks/list-entry/dataWithMultiplier.json'
import dataWithSeveralCountries from '../mocks/list-entry/dataWithSeveralCountries.json'

describe('ListItem', () => {
  describe('Date area', () => {
    it('returns date block', () => {
      render(<ListItem data={dataOk} />)
      const date = screen.getByText(/date/i)

      expect(date).toBeInTheDocument()
    })
  })

  describe('Card area', () => {
    //Flag block

    describe('Flag', () => {
      it('returns country flag', () => {
        render(<ListItem data={dataOk} />)
        const flag = screen.getByRole('img', { name: 'country-flag' })
        expect(flag).toBeInTheDocument()
      })

      it('returns default flag', () => {
        render(<ListItem data={dataNoFlag} />)
        const flag = screen.getByRole('img', { name: 'placeholder-flag' })
        expect(flag).toBeInTheDocument()
      })
    })

    // Currency Block

    describe('Currency Display', () => {
      it('returns the currency with no multiplier', () => {
        render(<ListItem data={dataOk} />)
        const currency = screen.getByText('RON')

        expect(currency).toBeInTheDocument()
      })

      it('returns the currency with multiplier', () => {
        render(<ListItem data={dataWithMultiplier} />)
        const currency = screen.getByText('100000 ZWD')

        expect(currency).toBeInTheDocument()
      })
    })

    // Country Name block

    describe('Country name', () => {
      describe('One Country ', () => {
        it('returns the country name', () => {
          render(<ListItem data={dataOk} />)
          const country = screen.getByText('ROMANIA')
          expect(country).toBeInTheDocument()
        })
      })

      describe('Several Countries', () => {
        it('returns "several" label', () => {
          render(<ListItem data={dataWithSeveralCountries} />)
          const severalLabel = screen.getByText(/several/i)
          expect(severalLabel).toBeInTheDocument()
        })

        it('returns info icon', () => {
          render(<ListItem data={dataWithSeveralCountries} />)
          const infoIcon = screen.getByTitle('info-icon')
          expect(infoIcon).toBeInTheDocument()
        })

        describe('Tooltip', () => {
          it('returns null tooltip', () => {
            render(<ListItem data={dataWithSeveralCountries} />)

            const nullTooltip = screen.queryByRole('tooltip')

            expect(nullTooltip).not.toBeInTheDocument()
          })

          it('returns tooltip  after hover', async () => {
            render(<ListItem data={dataWithSeveralCountries} />)
            const user = userEvent.setup()

            const infoIcon = screen.getByTitle('info-icon')

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
          render(<ListItem data={dataOk} />)
          const pay = screen.getByText(/pay/i)
          expect(pay).toBeInTheDocument()
        })

        it('returns get exchange label', () => {
          render(<ListItem data={dataOk} />)
          const get = screen.getByText(/get/i)
          expect(get).toBeInTheDocument()
        })

        it('returns mid exchange label', () => {
          render(<ListItem data={dataOk} />)
          const mid = screen.getByText(/mid/i)
          expect(mid).toBeInTheDocument()
        })
      })

      describe('Exchange rate', () => {
        it('returns pay exchange rate', () => {
          render(<ListItem data={dataOk} />)
          const pay = screen.getByText('0.2204')
          expect(pay).toBeInTheDocument()
        })

        it('returns get exchange rate', () => {
          render(<ListItem data={dataOk} />)
          const get = screen.getByText('0.2094')
          expect(get).toBeInTheDocument()
        })

        it('returns mid exchange rate', () => {
          render(<ListItem data={dataOk} />)
          const mid = screen.getByText('0.2149')
          expect(mid).toBeInTheDocument()
        })
      })
    })
  })
})
