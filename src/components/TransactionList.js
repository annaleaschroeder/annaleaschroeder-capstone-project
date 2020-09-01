import React from 'react'
import Transaction from './Transaction'

export default function TransactionList({ transactions }) {
  return (
    <section>
      {transactions.map(({ text, id }) => (
        <Transaction key={id} text={text} />
      ))}
    </section>
  )
}
