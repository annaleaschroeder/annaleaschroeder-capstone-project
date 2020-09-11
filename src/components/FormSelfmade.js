import React from 'react'
import styled from 'styled-components/macro'

export default function NewTransactionForm({ onSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <label>Currency: Euro</label>
      <input
        autoFocus
        name="transactionInput"
        placeholder="Enter new transaction"
      />

      <button type="submit">Add Transaction</button>
    </form>
  )
}

function handleSubmit(event) {
  event.preventDevault()
  const form = event.target
  const newTransaction = {}
  const input = form.transactionInput.value
}
