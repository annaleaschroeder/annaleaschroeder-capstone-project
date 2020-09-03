import React, { useState } from 'react'
import TransactionFormInput from './TransactionFormInput'
import TransactionList from './TransactionList'
import { v4 as uuidv4 } from 'uuid'
import ToggleSwitch from './ToggleSwitch'
import styled from 'styled-components/macro'

export default function TransactionInputPage() {
  const [transaction, setTransaction] = useState([])
  const [isToggled, setIsToggled] = useState(false)

  const date = new Date()
  const dateConventionSettings = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }
  const timestamp = date.toLocaleDateString('de-DE', dateConventionSettings)

  return (
    <>
      <ToggleSwitch
        id="test-switch"
        toggled={isToggled}
        onChange={(event) => setIsToggled(event.target.checked)}
      />
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

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const input = form.transactionInput
    const number = input.value
    setTransaction([...transaction, { timestamp, number, id: uuidv4() }])
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
// function handleClick() {
//   setToggled((s) => !s)
// }
// }
