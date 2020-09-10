import React from 'react'
import { render } from '@testing-library/react'
import Transaction from './Transaction'

describe('Single Transaction', () => {
  it('Shows a section containing a timestamp (date, month, year) and the transaction value', () => {
    const createdAt = '9.7.2020'
    const newTransaction = '20,95'
    const type = 'income'
    const container = render(
      <Transaction
        createdAt={createdAt}
        newTransaction={newTransaction}
        type={type}
      />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
