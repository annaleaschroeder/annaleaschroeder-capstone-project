import React from 'react'
import Transaction from './Transaction'

export default function TransactionList({ transactions }) {
  console.log(transactions)

  return (
    <ul>
      {transactions.map(({ timestamp, value, id, type }) => (
        <li key={id}>
          <Transaction
            createdAt={timestamp}
            newTransaction={value}
            type={type}
          />
        </li>
      ))}
    </ul>
  )
}
