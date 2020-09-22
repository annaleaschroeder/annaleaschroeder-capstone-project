import React, { useState } from 'react'
import TransactionFormInput from '../TransactionFormInput'
import ToggleSwitch from '../ToggleSwitch'
import styled from 'styled-components/macro'
import { postNewTransactionEntry } from '../utils/services'

export default function AddTransactionPage() {
  const [selected, setSelected] = useState(false)

  return (
    <PageStyled>
      <ToggleSwitch selected={selected} onToggle={handleToggle} />
      <TransactionFormInput onSave={onSaveAddTransactionEntry} />
      <ButtonContainer>
        <ReturnRoute href="/">
          <ReturnButton>
            <ReturnImage
              xmlns="http://www.w3.org/2000/svg"
              height="28"
              viewBox="0 0 24 24"
              width="28"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
            </ReturnImage>
            <ButtonText>Return</ButtonText>
          </ReturnButton>
        </ReturnRoute>
      </ButtonContainer>
    </PageStyled>
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

const PageStyled = styled.div`
  margin: 20px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  height: fit-content;
`

const ReturnRoute = styled.a`
  text-decoration: none;
`

const ReturnButton = styled.button`
  display: block;
  border: none;
  background-color: white;
  border-radius: 5px;
  box-shadow: 5px 5px 10px var(--grey-shadow);
`
const ReturnImage = styled.svg`
  justify-items: center;
`

const ButtonText = styled.span`
  display: block;
  justify-self: center;
`
