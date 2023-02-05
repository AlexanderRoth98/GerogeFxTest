import { render, screen, waitFor } from '@testing-library/react'
import App from '../../App'
import { rest } from 'msw'
import { server } from '../../mocks/server/server.js'
import userEvent from '@testing-library/user-event'
import { MemoryRouter as Router } from 'react-router-dom'

describe('Full app tests', () => {
  test('loading message is displayed', () => {
    render(<App />, { wrapper: Router })

    const message = screen.getByText(/fetching/i)

    expect(message).toBeInTheDocument()
  })

  test('page loads with currencies', async () => {
    render(<App />, { wrapper: Router })

    const items = await screen.findAllByRole('listitem')

    expect(items).toHaveLength(3)
  })

  test('error message is displayed', async () => {
    server.resetHandlers(rest.get('https://run.mocky.io/v3/c88db14a-3128-4fbd-af74-1371c5bb0343', (req, res, ctx) => res(ctx.status(500))))

    render(<App />, { wrapper: Router })

    const message = await screen.findByText(/error/i)

    expect(message).toBeInTheDocument()
  })

  test('search for several currencies', async () => {
    render(<App />, { wrapper: Router })

    const user = userEvent.setup()
    const searchBar = await screen.findByRole('combobox')

    await user.type(searchBar, 'A')
    const secondSelection = screen.getByRole('option', { name: 'AFN' })
    await user.click(secondSelection)

    await user.type(searchBar, 'A')
    const firstSelection = screen.getByRole('option', { name: 'AED' })
    await user.click(firstSelection)

    const searchIcon = screen.getByTitle('search-icon')
    await user.click(searchIcon)

    await waitFor(async () => {
      const items = await screen.findAllByRole('listitem')
      expect(items).toHaveLength(2)
    })
  })

  test('search for one currency', async () => {
    render(<App />, { wrapper: Router })

    const user = userEvent.setup()
    const searchBar = await screen.findByRole('combobox')

    await user.type(searchBar, 'RO')

    const currency = screen.getByRole('option', { name: 'RON' })
    await user.click(currency)

    const searchIcon = screen.getByTitle('search-icon')
    await user.click(searchIcon)

    await waitFor(async () => {
      const items = await screen.findAllByRole('listitem')
      expect(items).toHaveLength(1)
    })
  })

  describe('Deep linking', () => {
    test('one search criteria', async () => {
      render(
        <Router initialEntries={['/RON']}>
          <App />
        </Router>
      )
      const items = await screen.findAllByRole('listitem')
      expect(items).toHaveLength(1)
    })

    test('one search criteria lowercase', async () => {
      render(
        <Router initialEntries={['/ron']}>
          <App />
        </Router>
      )
      const items = await screen.findAllByRole('listitem')
      expect(items).toHaveLength(1)
    })

    test('several search criteria', async () => {
      render(
        <Router initialEntries={['/AFN&RON']}>
          <App />
        </Router>
      )
      const items = await screen.findAllByRole('listitem')
      expect(items).toHaveLength(2)
    })

    test('several search criteria with error', async () => {
      render(
        <Router initialEntries={['/RON&XYZ']}>
          <App />
        </Router>
      )
      const items = await screen.findAllByRole('listitem')
      expect(items).toHaveLength(1)
    })

    test('invalid search criteria', async () => {
      render(
        <Router initialEntries={['/xyz']}>
          <App />
        </Router>
      )
      const invalidMessage = await screen.findByText(/invalid/i)
      expect(invalidMessage).toBeInTheDocument()
    })

    test('same criteria several times', async () => {
      render(
        <Router initialEntries={['/RON&RON&RON']}>
          <App />
        </Router>
      )
      const items = await screen.findAllByRole('listitem')
      expect(items).toHaveLength(1)
    })
  })
})
