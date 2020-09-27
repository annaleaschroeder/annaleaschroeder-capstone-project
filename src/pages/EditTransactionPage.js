import React, { useState, useEffect } from 'react'
import TransactionFormInput from '../form/TransactionFormInput'
import ToggleSwitch from '../toggleSwitch/ToggleSwitch'
import ReturnToOverviewButton from '../buttons/ReturnToOverviewButton'
import styled from 'styled-components/macro'
import { editTransactionEntry, getTransactionEntry } from '../utils/services'
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
    <PageStyled>
      <ToggleSwitch selected={selected} onToggle={handleToggle} />
      <TransactionFormInput
        onSave={onEditUpdateTransactionEntry}
        notes={transaction.notes}
        value={transaction.value?.toFixed(2).replace('.', ',')}
        tag={transaction.tag}
      />
      <ReturnToOverviewButton />
    </PageStyled>
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

const PageStyled = styled.div`
  margin: 20px;
`
