import React, { useState, useEffect } from 'react'
import TransactionList from '../transactionComponents/transactionList/TransactionList'
import styled from 'styled-components/macro'
import {
  getTransactionEntries,
  deleteTransactionEntry,
  editTransactionEntry,
} from '../services/transactionServices'
import { updateMonthlyBudget } from '../common/updateMonthlyBudget'
import AddTransactionButton from '../common/buttons/addTransactionButton/AddTransactionButton'

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
    <PageWrapper>
      <PageStyled>
        <BalanceContainer>
          <BalanceHeadline data-cy="balanceHeadline">
            Monthly Balance:
          </BalanceHeadline>
          <Balance data-cy="monthlyBudget">
            {updateMonthlyBudget(transactions)}
          </Balance>
        </BalanceContainer>
        <hr />
        <TransactionList
          deleteTransaction={deleteTransaction}
          transactions={transactions}
          editTransaction={editTransaction}
        />
        <ButtonContainer>
          <ButtonPositionContainer>
            <AddTransactionButton />
          </ButtonPositionContainer>
        </ButtonContainer>
      </PageStyled>
    </PageWrapper>
  )
}

const PageWrapper = styled.main`
  display: grid;
  grid-template-columns:
    1fr
    min(65ch, 100%)
    1fr;
`

const PageStyled = styled.div`
  margin: 20px;
  grid-column: 2;
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
  height: 100px;
`

const ButtonPositionContainer = styled.div`
  position: fixed;
  bottom: 40px;
`
