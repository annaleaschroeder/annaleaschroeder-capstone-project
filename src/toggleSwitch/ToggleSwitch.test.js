import React from 'react'
import ToggleSwitch from './ToggleSwitch'
import { render } from '@testing-library/react'

describe('ToggleSwitch', () => {
  it('renders correctly', () => {
    const { container } = render(<ToggleSwitch selected={true} />)
    expect(container).toMatchSnapshot()
  })
})
