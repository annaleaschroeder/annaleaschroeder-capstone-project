import React, { useState, useEffect } from 'react'
import TransactionList from '../TransactionList'
import styled from 'styled-components/macro'
import {
  getTransactionEntries,
  deleteTransactionEntry,
  editTransactionEntry,
} from '../utils/services'
import { updateMonthlyBudget } from '../common/updateMonthlyBudget'
import AddTransactionButton from '../buttons/AddTransactionButton'

export default function TransactionOverviewPage() {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    getTransactionEntries().then(setTransactions)
  }, [])

  function deleteTransaction(id) {
    deleteTransactionEntry(id).then(setTransactions)
  }

  function editTransaction(id, updatedTransaction) {
    editTransactionEntry(id, updatedTransaction).then(setTransactions)
  }

  return (
    <PageStyled>
      <AddTransactionButton />
      <BalanceContainer>
        <BalanceHeadline>Monthly Balance:</BalanceHeadline>
        <Balance>{updateMonthlyBudget(transactions)}</Balance>
      </BalanceContainer>
      <hr />
      <TransactionList
        deleteTransaction={deleteTransaction}
        transactions={transactions}
        editTransaction={editTransaction}
      />
    </PageStyled>
  )
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
