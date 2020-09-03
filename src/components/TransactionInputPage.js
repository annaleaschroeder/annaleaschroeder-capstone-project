import React, { useState } from 'react'
import TransactionFormInput from './TransactionFormInput'
import TransactionList from './TransactionList'
import { v4 as uuidv4 } from 'uuid'

export default function TransactionInputPage() {
  const [transaction, setTransaction] = useState([])

  const date = new Date()
  const dateConventionSettings = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }
  const timestamp = date.toLocaleDateString('de-DE', dateConventionSettings)

  return (
    <>
      <TransactionFormInput onSubmit={handleSubmit} />
      <TransactionList timestamp={timestamp} transactions={transaction} />
    </>
  )
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const input = form.transactionInput
    const number = input.value
    setTransaction([...transaction, { timestamp, number, id: uuidv4() }])
    form.reset()
  }
}
