import React from 'react'
import ReturnToOverviewButton from './ReturnToOverviewButton'
import { render } from '@testing-library/react'

describe('ReturnToOverviewButton', () => {
  it('renders correctly', () => {
    const { container } = render(<ReturnToOverviewButton />)
    expect(container).toMatchSnapshot()
  })
})
