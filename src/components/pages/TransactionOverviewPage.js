import React, { useState, useEffect } from 'react'
import TransactionList from '../TransactionList'
import styled from 'styled-components/macro'
import { getTransactionEntries } from '../utils/services'

export default function TransactionOverviewPage() {
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
        <Balance>{monthlyBudget}</Balance>
      </BalanceContainer>
      <hr />
      <TransactionList transactions={transactions} />
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
