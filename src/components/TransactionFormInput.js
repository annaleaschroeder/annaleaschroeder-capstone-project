import React from 'react'
import styled from 'styled-components/macro'


export default function TransactionFormInput({
  onSubmit,
  number,
  register,
  errors,
}) {
  return (
    <FormStyled onSubmit={onSubmit}>
      <InputContainer>
        <input
          number={number}
          id="transactionInput"
          name="transactionInput"
          placeholder="Enter new Transaction"
          type="number"
          step="0.01"
          ref={register({
            required: true,
            min: 1,
            pattern: /'^[0-9]+([.][0-9]{1,2})?'/i,
          })}
        />
        {errors.transactionInput &&
          'You need to enter a valid transaction. Example: 20,95.'}
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
