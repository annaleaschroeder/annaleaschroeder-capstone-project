import React from 'react'
import Transaction from './Transaction'

export default function TransactionList({ transactions }) {
  return (
    <section>
      {transactions.map(({ timestamp, number, id }) => (
        <Transaction key={id} createdAt={timestamp} newTransaction={number} />
      ))}
    </section>
  )
}
