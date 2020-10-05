import React, { useState, useEffect } from 'react'
import TransactionFormInput from '../transactionComponents/transactionForm/TransactionFormInput'
import ToggleSwitch from '../common/toggleSwitch/ToggleSwitch'
import ReturnToOverviewButton from '../common/buttons/returnButton/ReturnToOverviewButton'
import styled from 'styled-components/macro'
import {
  editTransactionEntry,
  getTransactionEntry,
} from '../services/transactionServices'
import { useParams } from 'react-router-dom'

export default function EditTransactionPage() {
  const { id } = useParams()
  const [selected, setSelected] = useState(false)
  const [transaction, setTransaction] = useState({})

  useEffect(() => {
    getTransactionEntry(id).then(setTransaction)
  }, [id])

  useEffect(() => {
    setSelected(transaction.type === 'income')
  }, [transaction])

  return (
    <PageWrapper>
      <PageStyled>
        <ReturnToOverviewButton />
        <ToggleSwitch selected={selected} onToggle={handleToggle} />
        <TransactionFormInput
          onSave={onEditUpdateTransactionEntry}
          notes={transaction.notes}
          value={transaction.value?.toFixed(2).replace('.', ',')}
          tag={transaction.tag}
        />
      </PageStyled>
    </PageWrapper>
  )
  function handleToggle() {
    setSelected(!selected)
  }

  function onEditUpdateTransactionEntry(value, notes, tag) {
    const updatedTransaction = {
      type: selected ? 'income' : 'spending',
      value: parseFloat(String(value).replace(',', '.')),
      notes: notes,
      tag: tag,
      id: transaction.id,
      timestamp: transaction.timestamp,
    }

    editTransactionEntry(transaction.id, updatedTransaction)
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
