import React from 'react'
import Transaction from './Transaction'

export default {
  title: 'Transaction',
  component: Transaction,
}

const Template = (args) => <Transaction {...args} />

export const IndivdualTransaction = Template.bind()
IndivdualTransaction.args = {
  timestamp: '07.9.2020',
  newTransaction: 15.99,
  type: 'spending',
  tag: 'food',
  notes: 'Lunch with Lara and Tom',
}
