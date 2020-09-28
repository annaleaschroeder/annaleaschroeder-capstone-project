import React from 'react'
import { render } from '@testing-library/react'
import Header from './Header'
import renderer from 'react-test-renderer'

describe('Header', () => {
  const date = new Date()
  const title = 'Budget Overview'
  it('shows the main headline', () => {
    const { getByText } = render(<Header date={date} title={title} />)
    expect(getByText('Budget Overview')).toBeInTheDocument()
  })

  it('renders month and year into the subheadline with date object', () => {
    const month = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]

    const { getByText } = render(<Header date={date} />)
    expect(
      getByText(`${month[date.getMonth()]} ${date.getFullYear()}`)
    ).toBeInTheDocument()
  })

  it('renders month and year into the subheadline mock object', () => {
    const { getByText } = render(
      <Header date={{ getFullYear: () => 2020, getMonth: () => 7 }} />
    )
    expect(getByText('August 2020')).toBeInTheDocument()
  })

  it('renders correctly for January', () => {
    const tree = renderer.create(
      <Header date={new Date('2020-01-07 19:29:59 +02:00')} />
    )
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly for February', () => {
    const tree = renderer.create(
      <Header date={new Date('2020-02-27 19:29:59 +02:00')} />
    )
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly for December', () => {
    const tree = renderer.create(
      <Header date={new Date('2020-12-31 09:15:10 +02:00')} />
    )
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly for January 2021', () => {
    const tree = renderer.create(
      <Header date={new Date('2021-01-15 00:00:00 +02:00')} />
    )
    expect(tree).toMatchSnapshot()
  })
})
