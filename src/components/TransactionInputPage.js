import React, { useState } from 'react'
import TransactionFormInput from './TransactionFormInput'
import TransactionList from './TransactionList'
// import { v4 as uuidv4 } from 'uuid'
import ToggleSwitch from './ToggleSwitch'
import styled from 'styled-components/macro'

// const dateConventionSettings = {
//   year: 'numeric',
//   month: 'numeric',
//   day: 'numeric',
// }
export default function TransactionInputPage({ onSubmit }) {
  const [selected, setSelected] = useState(false)


  // const date = new Date()
  // const timestamp = date.toLocaleDateString('de-DE', dateConventionSettings)

  return (
    <>
      <ToggleSwitch selected={selected} toggleSelected={handleToggle} />
      <TransactionFormInput onSubmit={setTransaction} />
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

//   function addNewTransaction(transactionValue) {
//     const transaction = transactionValue
//     setTransaction([
//       ...transaction,
//       { timestamp, transactionValue, id: uuidv4() },
//     ])
//   }
}

const BalanceContainer = styled.div`
  display: flex;
`
const BalanceHeadline = styled.div`
  display: inline;
`
const Balance = styled.h5`
  display: inline;
