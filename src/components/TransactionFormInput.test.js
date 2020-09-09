import React from 'react'
import TransactionFormInput from './TransactionFormInput'
import renderer from 'react-test-renderer'
import { render, fireEvent, waitFor } from '@testing-library/react'

import 'jest-styled-components'

window.MutationObserver = require('mutation-observer')

describe('TransactionInputForm', () => {
  it('creates a new transaction', async () => {
    const onSave = jest.fn()
    const { getByText, getByLabelText } = render(
      <TransactionFormInput onSave={onSave} />
    )

    fireEvent.change(getByLabelText('Euro'), {
      target: { value: '15,95' },
    })

    fireEvent.submit(getByText('Add Transaction'))
    await waitFor(() => expect(onSave).toHaveBeenCalled())
  })

  it('Displays a form to create new transactions', async () => {
    const onSave = jest.fn()
    const { getByPlaceholderText } = render(
      <TransactionFormInput onSave={onSave} />
    )

    const transactionInput = getByPlaceholderText('Enter new Transaction')
    expect(transactionInput.value).toBe('')
    fireEvent.input(transactionInput, { target: { value: '15,95' } })
    expect(transactionInput.value).toBe('15,95')
  })

  it('renders correctly', () => {
    const onSave = jest.fn()
    const tree = renderer.create(<TransactionFormInput onSave={onSave} />)
    expect(tree).toMatchSnapshot()
  })
})
