import { formatDate } from '../../utils/DateUtils'

describe('Date fromatting', () => {
  it('returns formatted date', () => {
    const date = formatDate('2018-11-08T23:00:00Z')
    expect(date).toEqual('09.11.2018 00:00')
  })

  it('returns invalid date', () => {
    const date = formatDate('xyz')
    expect(date).toEqual('Invalid date')
  })
})
