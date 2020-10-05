import React, { useState } from 'react'
import TransactionFormInput from '../transactionComponents/transactionForm/TransactionFormInput'
import ToggleSwitch from '../common/toggleSwitch/ToggleSwitch'
import ReturnToOverviewButton from '../common/buttons/returnButton/ReturnToOverviewButton'
import styled from 'styled-components/macro'
import { postNewTransactionEntry } from '../services/transactionServices'

export default function AddTransactionPage() {
  const [selected, setSelected] = useState(false)

  return (
    <PageWrapper>
      <PageStyled>
        <ReturnToOverviewButton />
        <ToggleSwitch selected={selected} onToggle={handleToggle} />
        <TransactionFormInput onSave={onSaveAddTransactionEntry} />
      </PageStyled>
    </PageWrapper>
  )

  function handleToggle() {
    setSelected(!selected)
  }

  function onSaveAddTransactionEntry(newTransactionValue, notes, tag) {
    const newTransaction = {
      type: selected ? 'income' : 'spending',
      value: parseFloat(newTransactionValue.replace(',', '.')),
      notes: notes,
      tag: tag,
    }

    postNewTransactionEntry(newTransaction)
    setSelected(false)
  }
}

const PageWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr min(65ch, 100%) 1fr;
`

const PageStyled = styled.div`
  margin: 20px;
  grid-column: 2;
`
