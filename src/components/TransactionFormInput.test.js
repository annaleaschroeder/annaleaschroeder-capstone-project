import React from 'react'
import TransactionFormInput from './TransactionFormInput'
import renderer from 'react-test-renderer'

describe('Transaction Input Form', () => {
  it('renders correctly', () => {
    const noOp = () => {}
    const transactionValue = 15
    const tree = renderer.create(
      <TransactionFormInput
        transactionvalue={transactionValue}
        onSubmit={noOp}
      />
    )
    expect(tree).toMatchSnapshot()
  })
})
