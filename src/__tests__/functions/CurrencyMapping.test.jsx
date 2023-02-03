import { mapCurrencyToCountry } from '../../mapping/CurrencyMapping'

describe('Currency mapping', () => {
  it('returns one country', () => {
    const countries = mapCurrencyToCountry('RON')
    expect(countries).toHaveLength(1)
  })

  it('returns several countries', () => {
    const countries = mapCurrencyToCountry('XOF')
    expect(countries.length).toBeGreaterThan(1)
  })

  it('returns no country', () => {
    const countries = mapCurrencyToCountry('XYZ')
    expect(countries).toHaveLength(0)
  })
})
