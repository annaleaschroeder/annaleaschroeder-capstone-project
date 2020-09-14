import React, { useState, useEffect } from 'react'
import TransactionFormInput from './TransactionFormInput'
import TransactionList from './TransactionList'
import ToggleSwitch from './ToggleSwitch'
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

  const monthlyBudget = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(sum)

  return (
    <PageStyled>
      <ToggleSwitch selected={selected} onToggle={handleToggle} />
      <TransactionFormInput onSave={onSaveAddTransactionEntry} />
      <BalanceContainer>
        <BalanceHeadline>Monthly Balance:</BalanceHeadline>
        <Balance>{monthlyBudget}</Balance>
      </BalanceContainer>
      <hr />
      <TransactionList transactions={transactions} />
    </PageStyled>
  )
  function handleToggle() {
    setSelected(!selected)
  }
  function onSaveAddTransactionEntry(newTransactionValue, notes) {
    const newTransaction = {
      type: selected ? 'income' : 'spending',
      value: parseFloat(newTransactionValue.replace(',', '.')),
      notes: notes,
    }

    postNewTransactionEntry(newTransaction).then(setTransactions)
    setSelected(false)
  }
}

const PageStyled = styled.div`
  margin: 20px;
`

const BalanceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`
const BalanceHeadline = styled.div`
  display: inline;
  font-weight: bold;
`
const Balance = styled.div`
  display: inline;
  font-weight: bold;
`
