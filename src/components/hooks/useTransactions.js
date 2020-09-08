import { useState, useEffect } from 'react'
import {
  getTransactionEntries,
  postNewTransactionEntry,
} from '../utils/services'

export default function useTransactions() {
  const [transactions, setTransactions] = useState([])
  const [error, setError] = useState()

  useEffect(() => {
    getTransactionEntries().then(setTransactions)
  }, [])

  const addTransactionEntry = (transaction) => {
    postNewTransactionEntry(transaction)
      .then((newTransaction) =>
        setTransactions([newTransaction, ...transactions])
      )
      .catch(setError)
  }
  return { transactions, addTransactionEntry, error }
}
