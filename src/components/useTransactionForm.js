import { useState } from 'react'

export default function TransactionForm(newTransaction) {
  const [formIsVisible, setFormIsVisible] = useState(false)

  const showForm = () => setFormIsVisible(true)

  const onSave = (transaction) => {
    newTransaction(transaction)
    setFormIsVisible(false)
  }

  const goBack = () => window.location.reload() && setFormIsVisible(false)

  return { formIsVisible, showForm, onSave, goBack }
}
