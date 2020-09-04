import React from 'react'
import TransactionFormInput from './TransactionFormInput'
import renderer from 'react-test-renderer'

describe('Transaction Input Form', () => {
  it('renders correctly', () => {
    const noOp = () => {}
    const number = '15'
    const tree = renderer.create(
      <TransactionFormInput number={number} onSubmit={noOp} />
    )
    expect(tree).toMatchSnapshot()
  })
})
