import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components/macro'

TransactionFormInput.propTypes = {
  onSave: PropTypes.func.isRequired,
}

export default function TransactionFormInput({ onSave }) {
  return (
    <Formik
      initialValues={{ value: '' }}
      validationSchema={Yup.object().shape({
        value: Yup.string()
          .required('Required')
          .min(4, 'Too Short!')
          .matches(
            /^[0-9]+,[0-9]{2}$/,
            'Invalid format. Example: 12,00 or 1200,34'
          ),
      })}
      onSubmit={(form, { resetForm }) => {
        onSave(form.value)
        resetForm({ values: '' })
      }}
    >
      {({ errors, touched }) => (
        <FormStyled>
          <Input name="value" placeholder="Enter transaction" />
          {errors.value && touched.value ? (
            <ErrorMessageStyled>{errors.value}</ErrorMessageStyled>
          ) : null}
          <LableStyled htmlFor="value">Euro</LableStyled>
          <AddTrxBtn type="submit">Add Transaction</AddTrxBtn>
        </FormStyled>
      )}
    </Formik>
  )
}

const FormStyled = styled(Form)`
  display: grid;
  margin: 20px 0;
  grid-template-rows: 1fr 0.5fr 1fr;
  grid-template-columns: 1fr 4fr 1fr;
  grid-gap: 10px;
  position: relative;
`
const Input = styled(Field)`
  grid-column: 2 / 3;
  justify-self: center;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0 10px;
  width: 100%;
  height: 30px;
  background: none;
`
const ErrorMessageStyled = styled.div`
  color: red;
  font-size: 80%;
  grid-column: 2 / 3;
  grid-row: 2/ 3;
`

const LableStyled = styled.label`
  grid-column: 3 / 4;
  font-weight: bold;
  font-size: 100%;
  padding-top: 7px;
`

const AddTrxBtn = styled.button`
  justify-self: center;
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  width: min-content;
  padding: 5px;
  background: #2d79db;
  border-radius: 5px;
  border: none;
  color: white;
  font-weight: bold;
`
