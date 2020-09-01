import React from 'react'
//import styled from 'styled-components/macro'
//import { v4 as uuidv4 } from 'uuid'

export default function TransactionInput() {
  return (
    <form onSubmit={handleAdd}>
      <button>Platzhalter für Toggle-Button</button>
      <lable htmlFor="transactionInput">Enter new transaction</lable>
      <input
        id="transactionInput"
        name="transaction"
        placeholder="Enter new Transaction"
      />
      <h3>Euro</h3>
      <button>Add Transaction</button>
      <lable>Monthly Balance</lable>
      <hr />
    </form>
  )
  function handleAdd(event) {
    event.preventDevault()
    const form = event.target
    const input = form.transaction
    // onCreateTransaction({ text: input.value, id: uuidv4() })
    form.reset()
    input.focus()
  }
}
