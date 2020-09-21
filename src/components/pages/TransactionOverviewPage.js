import React, { useState, useEffect } from 'react'
import TransactionList from '../TransactionList'
import styled from 'styled-components/macro'
import {
  getTransactionEntries,
  deleteTransactionEntry,
  editTransactionEntry,
} from '../utils/services'
import { monthlyBudget } from '../common/updateMonthlyBudget'

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
      <AddTrxRoute href="/add-new-transaction">
        <AddTrxButton>
          <AddImage
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          </AddImage>
          <ButtonText>Add Transaction</ButtonText>
        </AddTrxButton>
      </AddTrxRoute>
      <BalanceContainer>
        <BalanceHeadline>Monthly Balance:</BalanceHeadline>
        <Balance>{monthlyBudget(transactions)}</Balance>
      </BalanceContainer>
      <hr />
      <TransactionList
        deleteTransaction={deleteTransaction}
        transactions={transactions}
        editTransaction={editTransactionEntry}
      />
    </PageStyled>
  )
}

const PageStyled = styled.div`
  margin: 20px;
`

const AddTrxRoute = styled.a`
  text-decoration: none;
`

const AddTrxButton = styled.button`
  display: flex;
  border: none;
  box-shadow: 5px 5px 10px var(--grey-shadow);
  border-radius: 5px;
`
const ButtonText = styled.span`
  align-items: center;
  padding-top: 4px;
`
const AddImage = styled.svg`
  display: inline;
  justify-items: center;
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
