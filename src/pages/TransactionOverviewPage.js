import React, { useState, useEffect } from 'react'
import TransactionList from '../transactionComponents/transactionList/TransactionList'
import styled from 'styled-components/macro'
import {
  getTransactionEntries,
  deleteTransactionEntry,
  editTransactionEntry,
} from '../services/transactionServices'
import { updateMonthlyBudget } from '../common/updateMonthlyBudget'
import AddTransactionButton from '../common/buttons/AddTransactionButton'

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
      <ButtonContainer>
        <AddTransactionButton />
      </ButtonContainer>
    </PageStyled>
  )
}

const PageStyled = styled.div`
  margin: 20px;
`
const BalanceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`
const BalanceHeadline = styled.div`
  display: inline;
  font-weight: bold;
`
const Balance = styled.div`
  display: inline;
  font-weight: bold;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  justify-self: center;
  justify-items: center;
`
