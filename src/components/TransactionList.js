import React from 'react'
import Transaction from './Transaction'

export default function TransactionList({ transactions }) {
  console.log(transactions)

  return (
    <ul>
      {transactions.map(({ timestamp, transactionvalue, id }) => (
        <li key={id}>
          <Transaction
            createdAt={timestamp}
            newTransaction={transactionvalue}
          />
        </li>
      ))}
    </ul>
  )
}
