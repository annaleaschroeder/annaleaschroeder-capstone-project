import React, { useState, useEffect } from 'react'
import TransactionFormInput from './TransactionFormInput'
import TransactionList from './TransactionList'
import ToggleSwitch from './ToggleSwitch'
// import FormInput from './FormInput'
import styled from 'styled-components/macro'
import {
  getTransactionEntries,
  postNewTransactionEntry,
} from './utils/services'

export default function TransactionInputPage() {
  const [selected, setSelected] = useState(false)
  const [transactions, setTransactions] = useState([])
  useEffect(() => {
    getTransactionEntries().then(setTransactions)
  }, [])
  const sum = transactions.reduce(function (acc, transaction) {
    return acc + transaction.value * (transaction.type === 'spending' ? -1 : 1)
  }, 0.0)
  return (
    <>
      <ToggleSwitch selected={selected} toggleSelected={handleToggle} />
      {/* <FormInput /> */}
      <TransactionFormInput onSave={onSaveAddTransactionEntry} />
      <BalanceContainer>
        <BalanceHeadline>
          Monthly Balance: <Balance>{sum.toFixed(2).replace('.', ',')}</Balance>
        </BalanceHeadline>
      </BalanceContainer>
      <hr />
      <TransactionList transactions={transactions} />
    </>
  )
  function handleToggle() {
    setSelected(!selected)
  }
  function onSaveAddTransactionEntry(newTransactionValue) {
    const newTransaction = {
      type: selected ? 'income' : 'spending',
      value: parseFloat(newTransactionValue.replace(',', '.')),
    }
    console.log(newTransaction)
    postNewTransactionEntry(newTransaction).then(setTransactions)
    setSelected(false)
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
