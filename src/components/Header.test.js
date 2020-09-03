import React from 'react'
import { render } from '@testing-library/react'
import Header from './Header'
import renderer from 'react-test-renderer'
//import 'jest-styled-components'

describe('Header', () => {
  const date = new Date()
  it('shows the main headline', () => {
    const { getByText } = render(<Header date={date} />)
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

  it('renders correctly for March', () => {
    const tree = renderer.create(
      <Header date={new Date('2020-03-17 19:29:59 +02:00')} />
    )
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly for April', () => {
    const tree = renderer.create(
      <Header date={new Date('2020-04-13 15:29:59 +02:00')} />
    )
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly for May', () => {
    const tree = renderer.create(
      <Header date={new Date('2020-05-06 03:29:59 +02:00')} />
    )
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly for June', () => {
    const tree = renderer.create(
      <Header date={new Date('2020-06-15 12:59:59 +02:00')} />
    )
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly for July', () => {
    const tree = renderer.create(
      <Header date={new Date('2020-07-15 12:59:59 +02:00')} />
    )
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly for August', () => {
    const tree = renderer.create(
      <Header date={new Date('2020-08-31 23:59:59 +02:00')} />
    )
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly for September', () => {
    const tree = renderer.create(
      <Header date={new Date('2020-09-01 00:00:00 +02:00')} />
    )
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly for October', () => {
    const tree = renderer.create(
      <Header date={new Date('2020-10-01 00:00:00 +02:00')} />
    )
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly for November', () => {
    const tree = renderer.create(
      <Header date={new Date('2020-11-01 00:00:00 +02:00')} />
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
