import React from 'react'
import styled from 'styled-components/macro'
import { useForm } from 'react-hook-form'

export default function TransactionFormInput({ onSave, value, setValue }) {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = () => {
    //event.target.reset()
    onSave()
  }

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <input
          id="transactionInput"
          name="transactionInput"
          placeholder="Enter new Transaction"
          onChange={onChange}
          value={value}
          ref={register({
            required: true,
            min: 1,
            pattern: /^[0-9]+,[0-9]{2}$/,
          })}
        />
        {errors.transactionInput &&
          errors.transactionInput.type === 'required' && (
            <span>Transaction required. Example: 20,95.</span>
          )}
      </InputContainer>
      <LableStyled htmlFor="transactionInput">Euro</LableStyled>
      <CancelButton type="reset">Cancel</CancelButton>
      <AddTransactionButton type="submit">Add Transaction</AddTransactionButton>
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
const CancelButton = styled.button`
  display: block;
  width: 100px;
  height: auto;
  padding: 10px;
  background-color: lightgrey;
  justify-content: grid-column-end;
`
