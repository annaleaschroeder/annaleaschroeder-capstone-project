import React from 'react'
import EditButton from './EditButton'
import { render } from '@testing-library/react'

describe('EditButton', () => {
  it('renders correctly', () => {
    const { container } = render(<EditButton />)
    expect(container).toMatchSnapshot()
  })
})
