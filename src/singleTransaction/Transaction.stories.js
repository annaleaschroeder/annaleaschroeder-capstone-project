import React from 'react'
import Transaction from './Transaction'

export default {
  title: 'Transaction',
  component: Transaction,
}

const Template = (args) => <Transaction {...args} />

export const IndivdualTransaction = Template.bind()
IndivdualTransaction.args = {
  createdAt: '07.9.2020',
  value: '+15.99 €',
  type: 'income',
  tag: 'food',
  notes: 'Lunch with Lara and Tom',
}
