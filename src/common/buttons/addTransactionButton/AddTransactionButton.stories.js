import React from 'react'
import AddTransactionButton from './AddTransactionButton'

export default {
  title: 'AddTransactionButton',
  component: AddTransactionButton,
}

const Template = (args) => <AddTransactionButton {...args} />

export const AddTransaction = Template.bind()
AddTransaction.args = {}
