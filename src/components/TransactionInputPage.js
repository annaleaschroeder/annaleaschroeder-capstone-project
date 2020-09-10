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
  const [value, setValue] = useState('')
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
      <TransactionFormInput
        value={value}
        setValue={setValue}
        onSave={onSaveAddTransactionEntry}
      />
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
  function onSaveAddTransactionEntry() {
    const newTransaction = {
      type: selected ? 'income' : 'spending',
      value: parseFloat(value.replace(',', '.')),
    }

    postNewTransactionEntry(newTransaction).then(setTransactions)
    setSelected(false)
    setValue('')
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
