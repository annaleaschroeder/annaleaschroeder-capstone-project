// import {
//   getTransactionEntries,
//   postNewTransactionEntry,
// } from '../utils/services'
// import React from 'react'

export function monthlyBudget(transactions) {
  const sum = transactions.reduce(function (acc, transaction) {
    return acc + transaction.value * (transaction.type === 'spending' ? -1 : 1)
  }, 0.0)
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(sum)
}
