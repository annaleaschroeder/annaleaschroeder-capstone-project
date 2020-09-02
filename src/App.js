import React, { useState } from 'react'
import Header from './components/Header'
import TransactionFormInput from './components/TransactionFormInput'
import TransactionList from './components/TransactionList'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [transaction, setTransaction] = useState([])

  const date = new Date()
  const dateConventionSettings = {
    // weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  const timestamp = date.toLocaleDateString('de-DE', dateConventionSettings)

  return (
    <div>
      <Header date={new Date()} />
      <TransactionFormInput timestamp={timestamp} onSubmit={handleSubmit} />
      <TransactionList timestamp={timestamp} transactions={transaction} />
    </div>
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
export default App
