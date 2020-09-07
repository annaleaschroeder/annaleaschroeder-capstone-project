import { useState, useEffect } from 'react'
import { getTransactionEntries, postTransactionEntries } from '.utils/services'

export default function useTransactions() {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    getTransactionEntries().then(setTransactions)
  }, [])

  const addTransactionEntry = (transaction) => {
    postTransactionEntries(transaction).then((newTransaction) =>
      setTransactions([newTransaction, ...transactions])
    )
  }
  return { transactions, addTransactionEntry }
}
