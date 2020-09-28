import React from 'react'
import DeleteButton from './DeleteButton'

export default {
  title: 'DeleteButton',
  component: DeleteButton,
}

const Template = (args) => <DeleteButton {...args} />

export const DeleteTransaction = Template.bind()
DeleteTransaction.args = {}
