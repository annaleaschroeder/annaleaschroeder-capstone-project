import React from 'react'
import TransactionFormInput from './TransactionFormInput'
import renderer from 'react-test-renderer'
import { render, wait } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import 'jest-styled-components'

window.MutationObserver = require('mutation-observer')

describe('TransactionForm', () => {
  it('renders the form', () => {
    const noop = () => {}

    const { getByText } = render(<TransactionFormInput onSave={noop} />)
    expect(getByText(/Euro/i)).toBeInTheDocument()
  })

  // it('calls onSave on Add Transaction click', () => {
  //   const onSaveMock = jest.fn()

  //   const { getByText } = render(<TransactionFormInput onSave={onSaveMock} />)

  //   const addTransactionBtn = getByText(/Add Transaction/i)
  //   userEvent.click(addTransactionBtn)
  //   expect(onSaveMock).toHaveBeenCalled()
  // })

  // it('does not call onSave on Add Transaction click without input but shows an error message', async () => {
  //   const onSaveMock = jest.fn()

  //   const { getByText } = render(<TransactionFormInput onSave={onSaveMock} />)
  //   const addTransactionButton = getByText(/Add Transaction/i)
  //   userEvent.click(addTransactionButton)

  //   await wait()

  //   expect(onSaveMock).not.toHaveBeenCalled()
  //   expect(getByText(/Transaction required./i)).toBeInTheDocument()
  // })

  // it('renders correctly', () => {
  //   const noOp = () => {}
  //   const tree = renderer.create(<TransactionFormInput onSave={noOp} />)
  //   expect(tree).toMatchSnapshot()
  // })
})

// window.MutationObserver = require('mutation-observer')

// describe('TransactionInputForm', () => {
//   it('creates a new transaction', async () => {
//     const onSave = jest.fn()
//     const { getByText, getByLabelText } = render(
//       <TransactionFormInput onSave={onSave} />
//     )

//     fireEvent.change(getByLabelText('Euro'), {
//       target: { value: '15,95' },
//     })

//     fireEvent.submit(getByText('Add Transaction'))
//     await waitFor(() => expect(onSave).toHaveBeenCalled())
//   })

//   it('Displays a form to create new transactions', async () => {
//     const onSave = jest.fn()
//     const { getByPlaceholderText } = render(
//       <TransactionFormInput onSave={onSave} />
//     )

//     const transactionInput = getByPlaceholderText('Enter new Transaction')
//     expect(transactionInput.value).toBe('')
//     fireEvent.input(transactionInput, { target: { value: '15,95' } })
//     expect(transactionInput.value).toBe('15,95')
//   })

//   it('renders correctly', () => {
//     const onSave = jest.fn()
//     const tree = renderer.create(<TransactionFormInput onSave={onSave} />)
//     expect(tree).toMatchSnapshot()
//   })
// })
