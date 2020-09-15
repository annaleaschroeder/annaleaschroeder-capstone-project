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
      initialValues={{ value: '', notes: '', tag: 'Food and Household' }}
      validationSchema={Yup.object().shape({
        value: Yup.string()
          .required('Required')
          .min(4, 'Too Short!')
          .matches(/^[0-9]+,[0-9]{2}$/, 'Invalid format. Example: 1200,34'),
        notes: Yup.string()
          .required('Required')
          .min(5, 'Too Short')
          .max(100, 'Too long'),
        tag: Yup.string().required('Required'),
      })}
      onSubmit={(form, { resetForm }) => {
        onSave(form.value, form.notes, form.tag)
        console.log(form.tag)
        resetForm({ values: '' })
      }}
    >
      {({ errors, touched }) => (
        <FormStyled>
          <Input name="value" placeholder="Enter transaction" />
          {errors.value && touched.value ? (
            <ErrorMessageInputStyled>{errors.value}</ErrorMessageInputStyled>
          ) : null}
          <LableStyled htmlFor="value">Euro</LableStyled>
          <DropDown name="tag" component="select">
            <OptionsStlyed value="Food and Household">
              Food and Household
            </OptionsStlyed>
            <option value="Leisure">Leisure</option>
            <option value="FixedCosts">Fixed Costs</option>
            <option value="Transportation">Transportation</option>
            <option value="Miscellaneous">Miscellaneous</option>
            <option value="Earnings">Earnings</option>
          </DropDown>

          {errors.tag && touched.tag ? (
            <ErrorDropDownStyled>{errors.tag}</ErrorDropDownStyled>
          ) : null}
          <Notes
            type="textarea"
            name="notes"
            placeholder="Add notes to transaction"
          />
          {errors.notes && touched.notes ? (
            <ErrorMessageNotesStyled>{errors.notes}</ErrorMessageNotesStyled>
          ) : null}
          <AddTrxBtn type="submit">Add Transaction</AddTrxBtn>
        </FormStyled>
      )}
    </Formik>
  )
}

const FormStyled = styled(Form)`
  display: grid;
  margin: 20px 0;
  grid-template-rows: 1fr 0.1fr 1fr 0.1fr 1fr 0.1fr 1fr;
  grid-template-columns: 1fr 4fr 1fr;
  grid-gap: 10px;
  position: relative;
`
const LableStyled = styled.label`
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  font-weight: bold;
  font-size: 100%;
  align-self: end;
  justify-self: center;
`

const Input = styled(Field)`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  align-self: end;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0 10px;
  width: 100%;
  height: 30px;
  background: none;
  box-shadow: 5px 5px 10px #e4e7eb;
`

const ErrorMessageInputStyled = styled.div`
  color: red;
  font-size: 80%;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
`
const DropDown = styled(Field)`
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  box-shadow: 5px 5px 10px #e4e7eb;
  display: block;
  font-size: 90%;
  line-height: 1;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0;
  border: 1px solid #aaa;

  border-radius: 5px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
`

const OptionsStlyed = styled.option`
  justify-self: center;
`

const ErrorDropDownStyled = styled.div`
  grid-column: 2 / 3;
  grid-row: 4 / 5;
  color: red;
  font-size: 80%;
`

const Notes = styled(Field)`
  grid-column: 2 / 3;
  grid-row: 5 / 6;
  align-self: end;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0 10px;
  width: 100%;
  height: 30px;
  background: none;
  box-shadow: 5px 5px 10px #e4e7eb;
`

const ErrorMessageNotesStyled = styled.div`
  color: red;
  font-size: 80%;
  grid-column: 2 / 3;
  grid-row: 6 / 7;
`

const AddTrxBtn = styled.button`
  justify-self: center;
  grid-column: 2 / 3;
  grid-row: 7 / 8;
  width: min-content;
  padding: 7px;
  background: linear-gradient(
    90deg,
    rgba(45, 121, 219, 1) 0%,
    rgba(72, 150, 250, 1) 100%
  );
  box-shadow: 5px 5px 10px #e4e7eb;
  border-radius: 5px;
  border: none;
  color: white;
  font-weight: bold;
  font-size: 75%;
`
