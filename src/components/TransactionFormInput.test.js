import React from 'react'
import TransactionFormInput from './TransactionFormInput'
import renderer from 'react-test-renderer'

describe('Transaction Input Form', () => {
  it('renders correctly', () => {
    const noOp = () => {}
    const transactionvalue = '15'
    const tree = renderer.create(
      <TransactionFormInput
        transactionvalue={transactionvalue}
        onSubmit={noOp}
      />
    )
    expect(tree).toMatchSnapshot()
  })
})
