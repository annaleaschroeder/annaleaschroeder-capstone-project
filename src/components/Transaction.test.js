import React from 'react'
import { render } from '@testing-library/react'
import Transaction from './Transaction'

describe('Single Transaction', () => {
  it('shows a paragraph containing a timestamp (date, month, year) and the transaction value', () => {
    const createdAt = '9.7.2020'
    const newTransaction = '20,95'
    const { getByText } = render(
      <Transaction createdAt={createdAt} newTransaction={newTransaction} />
    )
    expect(getByText('9.7.2020 20,95')).toBeInTheDocument()
  })
})
