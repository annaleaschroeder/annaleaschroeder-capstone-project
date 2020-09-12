import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

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
          .matches(/^[0-9]+,[0-9]{2}$/, 'Invalid format. Example: 12,00'),
      })}
      onSubmit={(form) => {
        onSave(form.value)
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <label htmlFor="value">Currency: Euro</label>
          <Field name="value" placeholder="Enter new transaction" />
          {errors.value && touched.value ? <div>{errors.value}</div> : null}
          <button type="submit">Add Transaction</button>
        </Form>
      )}
    </Formik>
  )
}
