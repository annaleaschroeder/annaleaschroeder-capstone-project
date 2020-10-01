import React from 'react'
import DeleteButton from './DeleteButton'
import { render } from '@testing-library/react'

describe('DeleteButton', () => {
  it('renders correctly', () => {
    const { container } = render(<DeleteButton />)
    expect(container).toMatchSnapshot()
  })
})
