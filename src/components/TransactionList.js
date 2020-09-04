import React from 'react'
import Transaction from './Transaction'

export default function TransactionList({ transactions }) {
  return (
    <ul>
      {transactions.map(({ timestamp, number, id }) => (
        <li key={id}>
          <Transaction createdAt={timestamp} newTransaction={number} />
        </li>
      ))}
    </ul>
  )
}
