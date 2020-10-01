import React from 'react'
import AddTransactionButton from './AddTransactionButton'
import { render } from '@testing-library/react'

describe('AddTransactionButton', () => {
  it('renders correctly', () => {
    const { container } = render(<AddTransactionButton />)
    expect(container).toMatchSnapshot()
  })
})
