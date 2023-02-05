import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchArea from '../../components/search/SearchArea'

const options = ['RON', 'ATS', 'USD']

describe('Search Area', () => {
  // Heading
  describe('Heading', () => {
    it('returns heading', () => {
      render(<SearchArea options={options} />)
      const heading = screen.getByRole('heading')
      expect(heading).toBeInTheDocument()
    })
  })

  // Search Bar
  describe('Search Bar', () => {
    it('returns autocomplete', () => {
      render(<SearchArea options={options} />)

      const searchBar = screen.getByRole('combobox')
      expect(searchBar).toBeInTheDocument()
    })

    it('returns filtered options list', async () => {
      render(<SearchArea options={options} />)

      const user = userEvent.setup()
      const searchBar = screen.getByRole('combobox')

      await user.type(searchBar, 'A')

      const ronChip = screen.queryByText('RON')

      expect(ronChip).not.toBeInTheDocument()
    })

    it('returns selected currency', async () => {
      render(<SearchArea options={options} />)

      const user = userEvent.setup()
      const searchBar = screen.getByRole('combobox')

      await user.type(searchBar, 'RO')

      const currency = screen.getByRole('option', { name: 'RON' })
      await user.click(currency)

      const ronChip = screen.getByText('RON')

      expect(ronChip).toBeInTheDocument()
    })

    it('returns multiple selected currencies', async () => {
      render(<SearchArea options={options} />)

      const user = userEvent.setup()
      const searchBar = screen.getByRole('combobox')

      await user.type(searchBar, 'RO')

      const currencyRON = screen.getByText('RON')
      await user.click(currencyRON)

      await user.type(searchBar, 'AT')

      const currencyATS = screen.getByText('ATS')
      await user.click(currencyATS)

      const ronChip = screen.getByText('RON')
      const atsChip = screen.getByText('ATS')

      expect(ronChip && atsChip).toBeInTheDocument()
    })

    it('returns search icon', () => {
      render(<SearchArea options={options} />)

      const searchIcon = screen.getByTitle('search-icon')
      expect(searchIcon).toBeInTheDocument()
    })
  })

  //Tooltip
  describe('Info Area', () => {
    it('returns info icon', () => {
      render(<SearchArea options={options} />)

      const infoIcon = screen.getByTitle('search-info-icon')
      expect(infoIcon).toBeInTheDocument()
    })

    it('returns null tooltip', () => {
      render(<SearchArea options={options} />)

      const nullTooltip = screen.queryByRole('tooltip')
      expect(nullTooltip).not.toBeInTheDocument()
    })

    it('returns tooltip after hover', async () => {
      render(<SearchArea options={options} />)

      const user = userEvent.setup()

      const infoIcon = screen.getByTitle('search-info-icon')

      await user.hover(infoIcon)
      const tooltip = await screen.findByRole('tooltip')

      expect(tooltip).toBeInTheDocument()
    })
  })
})
