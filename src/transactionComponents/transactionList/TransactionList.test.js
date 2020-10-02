import React from 'react'
import TransactionList from './TransactionList'
import renderer from 'react-test-renderer'

describe('Lists all incoming Transactions', () => {
  it('renders correctly', () => {
    const transactions = [
      {
        id: '1',
        timestamp: '9.1.2020',
        value: 15.99,
        tag: 'food',
        type: 'spending',
      },
    ]
    const tree = renderer.create(
      <TransactionList transactions={transactions} />
    )
    expect(tree).toMatchSnapshot()
  })
})
