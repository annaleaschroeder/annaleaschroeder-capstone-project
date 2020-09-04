import React from 'react'
import { render } from '@testing-library/react'

describe('Single Transaction', () => {
  const createdAt = '9.7.2020'
  const newTransaction = '20,95'
  it('shows a paragraph containing a timestamp (date, month, year) and the transaction value', () => {
    const { getByText } = render(
      <section>
        <p>{createdAt + ' ' + newTransaction}</p>
      </section>
    )
    expect(getByText('9.7.2020 20,95')).toBeInTheDocument()
  })
})
//hello
