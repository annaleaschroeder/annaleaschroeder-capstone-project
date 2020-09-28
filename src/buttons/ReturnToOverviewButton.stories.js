import React from 'react'
import ReturnToOverviewButton from './ReturnToOverviewButton'

export default {
  title: 'ReturnButton',
  component: ReturnToOverviewButton,
}

const Template = (args) => <ReturnToOverviewButton {...args} />

export const AddTransaction = Template.bind()
AddTransaction.args = {}
