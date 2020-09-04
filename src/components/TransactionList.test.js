import React from 'react'
import TransactionList from './TransactionList'
import renderer from 'react-test-renderer'

describe('Lists all incoming Transactions', () => {
  it('renders correctly', () => {
    const transaction = [
      { key: '1', createdAt: '9.1.2020', newTransaction: '15,99' },
    ]
    const key = '1'
    const tree = renderer.create(
      <TransactionList key={key} transactions={transaction} />
    )
    expect(tree).toMatchSnapshot()
  })
})
