import React, { useState, useEffect } from 'react'
import TransactionList from '../TransactionList'
import styled from 'styled-components/macro'
import {
  getTransactionEntries,
  deleteTransactionEntry,
} from '../utils/services'
import { updateMonthlyBudget } from '../common/updateMonthlyBudget'

export default function TransactionOverviewPage() {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    getTransactionEntries().then(setTransactions)
  }, [])

  function deleteTransaction(id) {
    deleteTransactionEntry(id).then(setTransactions)
  }

  return (
    <PageStyled>
      <a href="/add-new-transaction">
        <button>
          <span aria-label="Arrow" role="img">
            ➕
          </span>
          Add new Transaction
        </button>
      </a>
      <BalanceContainer>
        <BalanceHeadline>Monthly Balance:</BalanceHeadline>
        <Balance>{updateMonthlyBudget(transactions)}</Balance>
      </BalanceContainer>
      <hr />
      <TransactionList
        deleteTransaction={deleteTransaction}
        transactions={transactions}
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
