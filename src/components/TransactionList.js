import React from 'react'
import Transaction from './Transaction'

export default function TransactionList({ transactions, timestamp }) {
  //   const date = new Date()
  //   const dateConventionSettings = {
  //     weekday: 'long',
  //     year: 'numeric',
  //     month: 'long',
  //     day: 'numeric',
  //   }
  //   const timestamp = date.toLocaleDateString('de-DE', dateConventionSettings)

  return (
    <section>
      {transactions.map(({ number, id }) => (
        <Transaction key={id} createdAt={timestamp} newTransaction={number} />
      ))}
    </section>
  )
}
