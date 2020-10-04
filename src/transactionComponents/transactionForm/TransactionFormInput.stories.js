import React from 'react'
import TransactionFormInput from './TransactionFormInput'

export default {
  title: 'TransactionForm',
  component: TransactionFormInput,
}

const Template = (args) => <TransactionFormInput {...args} />

export const AddTransactionForm = Template.bind()
AddTransactionForm.args = {}
