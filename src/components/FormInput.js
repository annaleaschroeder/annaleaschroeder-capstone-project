import React from 'react'
// import styled from 'styled-components/macro'
// import PropTypes from 'prop-types'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

export default function FormInput(onSave, value, setValue) {
  return (
    <Formik
      initialValues={{ value: '' }}
      validationSchema={Yup.object().shape({
        value: Yup.string()
          .required('Required')
          .min(4, 'Too Short!')
          .matches(/^[0-9]+,[0-9]{2}$/, 'Invalid format. Use 12,99'),
      })}
      onSubmit={(values) => {
        setValue(values.value)
        onSave()
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <lable htmlFor="value">Currency: Euro</lable>
          <Field
            name="value"
            autocomplete="off"
            id="transactionInput"
            placeholder="Enter new transaction"
          />
          {errors.value && touched.value ? <div>{errors.value}</div> : null}

          <button type="submit">Add Transaction</button>
        </Form>
      )}
    </Formik>
  )
}
