import React from 'react'
import { render } from '@testing-library/react'
import Transaction from './Transaction'

describe('Single Transaction', () => {
  it('Shows a section containing a timestamp (date, month, year) and the transaction value', () => {
    const createdAt = '9.7.2020'
    const value = '+ 20,95 €'
    const type = 'spending'
    const tag = 'food'
    const container = render(
      <Transaction createdAt={createdAt} value={value} type={type} tag={tag} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
