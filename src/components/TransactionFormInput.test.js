import React from 'react'
import TransactionFormInput from './TransactionFormInput'
import { render } from '@testing-library/react'

import 'jest-styled-components'

window.MutationObserver = require('mutation-observer')

describe('TransactionForm', () => {
  it('renders the form', () => {
    const noop = () => {}

    const { getByText } = render(<TransactionFormInput onSave={noop} />)
    expect(getByText(/Euro/i)).toBeInTheDocument()
  })
})
