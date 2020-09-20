import React, { useState, useEffect } from 'react'
import TransactionList from '../TransactionList'
import styled from 'styled-components/macro'
import { getTransactionEntries } from '../utils/services'
import { monthlyBudget } from '../common/changeTransactionArray'
import { saveLocally } from '../utils/localStorage'

export default function TransactionOverviewPage() {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    getTransactionEntries().then(setTransactions)
  }, [transactions])

  function deleteTransaction(transactions, id) {
    const index = transactions.findIndex((transaction) => {
      return transaction.id === id
    })
    transactions.splice(index, 1)
    saveLocally('Transactions', transactions)
    return setTransactions(transactions)
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
        <Balance>{monthlyBudget(transactions)}</Balance>
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
