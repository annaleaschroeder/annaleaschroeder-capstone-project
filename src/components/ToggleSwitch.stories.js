import React from 'react'
import ToggleSwitch from './ToggleSwitch'

export default {
  title: 'ToggleSwitch',
  component: ToggleSwitch,
}

const Template = (args) => <ToggleSwitch {...args} />

export const ToggleButton = Template.bind({})
ToggleButton.args = {}
