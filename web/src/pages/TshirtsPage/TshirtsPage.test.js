import { render } from '@redwoodjs/testing'

import TshirtsPage from './TshirtsPage'

describe('TshirtsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TshirtsPage bandSlug="42" />)
    }).not.toThrow()
  })
})
