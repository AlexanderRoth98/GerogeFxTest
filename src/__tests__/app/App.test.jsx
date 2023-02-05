import { render, screen, waitFor } from '@testing-library/react'
import App from '../../App'
import { rest } from 'msw'
import { server } from '../../mocks/server/server.js'
import userEvent from '@testing-library/user-event'

describe('Full app tests', () => {
  test('loading message is displayed', () => {
    render(<App />)

    const message = screen.getByText(/fetching/i)

    expect(message).toBeInTheDocument()
  })

  test('page loads with currencies', async () => {
    render(<App />)

    const items = await screen.findAllByRole('listitem')

    expect(items).toHaveLength(3)
  })

  test('error message is displayed', async () => {
    server.resetHandlers(rest.get('https://run.mocky.io/v3/c88db14a-3128-4fbd-af74-1371c5bb0343', (req, res, ctx) => res(ctx.status(500))))

    render(<App />)

    const message = await screen.findByText(/error/i)

    expect(message).toBeInTheDocument()
  })

  test('search for one currency', async () => {
    render(<App />)

    const user = userEvent.setup()
    const searchBar = await screen.findByRole('combobox')

    await user.type(searchBar, 'RO')

    const currency = screen.getByRole('option', { name: 'RON' })
    await user.click(currency)

    const searchIcon = screen.getByTitle('search-icon')
    await user.click(searchIcon)

    await waitFor(async () => {
      const test = await screen.findAllByRole('listitem')
      expect(test).toHaveLength(1)
    })
  })
})
