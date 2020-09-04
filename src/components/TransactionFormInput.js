import React from 'react'
import styled from 'styled-components/macro'
//import { v4 as uuidv4 } from 'uuid'

export default function TransactionFormInput({ onSubmit, number }) {
  return (
    <FormStyled onSubmit={onSubmit}>
      <InputContainer>
        <input
          number={number}
          id="transactionInput"
          name="transactionInput"
          placeholder="Enter new Transaction"
        />
      </InputContainer>
      <LableStyled htmlFor="transactionInput">Euro</LableStyled>
      <AddTransactionButton>Add Transaction</AddTransactionButton>
    </FormStyled>
  )
}

const FormStyled = styled.form`
  display: grid;
  justify-items: center;
  text-align: center;
  gap: 20px;
  padding: 20px;
`
const InputContainer = styled.div`
  display: flex;
`

const AddTransactionButton = styled.button`
  display: block;
  width: 200px;
  height: auto;
  padding: 10px;
  background-color: lightgrey;
  justify-content: grid-column-end;
`

const LableStyled = styled.label`
  font-weight: bold;
`
