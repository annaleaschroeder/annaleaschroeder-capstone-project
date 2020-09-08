import React, { useState } from 'react'
import TransactionFormInput from './TransactionFormInput'
import TransactionList from './TransactionList'
import ToggleSwitch from './ToggleSwitch'
import styled from 'styled-components/macro'
import useTransactions from './hooks/useTransactions'

// const dateConventionSettings = {
//   year: 'numeric',
//   month: 'numeric',
//   day: 'numeric',
// }
export default function TransactionInputPage({ onSubmit }) {
  const [selected, setSelected] = useState(false)
  const { transactions, addTransactionEntry } = useTransactions()
  // const date = new Date()
  // const timestamp = date.toLocaleDateString('de-DE', dateConventionSettings)

  return (
    <>
      <ToggleSwitch selected={selected} toggleSelected={handleToggle} />
      <TransactionFormInput onSubmit={addTransactionEntry} />
      <BalanceContainer>
        <BalanceHeadline>
          Monthly Balance: <Balance>2000,00</Balance>
        </BalanceHeadline>
      </BalanceContainer>
      <hr />

      <TransactionList transactions={transactions} />
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
`
