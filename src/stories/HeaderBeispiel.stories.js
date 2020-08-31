import React from 'react'

import { HeaderBeispiel } from './HeaderBeispiel'

export default {
  title: 'Example/HeaderBeispiel',
  component: HeaderBeispiel,
}

const Template = (args) => <HeaderBeispiel {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  user: {},
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {}
