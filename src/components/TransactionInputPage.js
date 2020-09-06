import React, { useState } from 'react'
import TransactionFormInput from './TransactionFormInput'
import TransactionList from './TransactionList'
import { v4 as uuidv4 } from 'uuid'
import ToggleSwitch from './ToggleSwitch'
import styled from 'styled-components/macro'

const dateConventionSettings = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
}
export default function TransactionInputPage() {
  const [transaction, setTransaction] = useState([])
  const [selected, setSelected] = useState(false)

  const date = new Date()
  const timestamp = date.toLocaleDateString('de-DE', dateConventionSettings)

  return (
    <>
      <ToggleSwitch selected={selected} toggleSelected={handleToggle} />
      <TransactionFormInput onSubmit={handleSubmit} />
      <BalanceContainer>
        <BalanceHeadline>
          Monthly Balance: <Balance>2000,00</Balance>
        </BalanceHeadline>
      </BalanceContainer>
      <hr />

      <TransactionList timestamp={timestamp} transactions={transaction} />
    </>
  )

  function handleToggle() {
    setSelected(!selected)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const input = form.transactionInput
    const transactionvalue = input.value
    const transactiontype = selected ? 'income' : 'spending'
    setTransaction([
      ...transaction,
      { timestamp, transactionvalue, id: uuidv4(), transactiontype },
    ])
    form.reset()
  }
}

const BalanceContainer = styled.div`
  display: flex;
`
const BalanceHeadline = styled.div`
  display: inline;
`
const Balance = styled.h5`
  display: inline;
`
