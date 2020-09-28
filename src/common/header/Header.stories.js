import React from 'react'
import Header from './Header'

export default {
  title: 'Header',
  component: Header,
  argTypes: {
    date: new Date(),
  },
}

const Template = (args) => <Header {...args} />

export const HeaderToday = Template.bind({})
HeaderToday.args = { date: new Date(), title: 'Budget Overview' }
