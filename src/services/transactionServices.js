import { loadLocally, saveLocally } from './localStorage'
import { v4 as uuidv4 } from 'uuid'

const dateConventionSettings = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
}

export function getTransactionEntries() {
  const transactions = []
  return loadLocally('Transactions', transactions).catch(() => {
    return transactions
  })
}

export function postNewTransactionEntry({ type, value, notes, tag }) {
  const date = new Date()
  const timestamp = date.toLocaleDateString('de-DE', dateConventionSettings)

  const newTransaction = {
    type,
    value,
    tag,
    notes,
    id: uuidv4(),
    timestamp,
  }

  return getTransactionEntries()
    .then((transactions) => [newTransaction, ...transactions])
    .then((transactions) => {
      saveLocally('Transactions', transactions)
      return transactions
    })
}

export function deleteTransactionEntry(id) {
  return getTransactionEntries().then((transactions) => {
    const index = transactions.findIndex((transaction) => {
      return transaction.id === id
    })
    const newTransactionArray = [...transactions]
    newTransactionArray.splice(index, 1)
    saveLocally('Transactions', newTransactionArray)
    return newTransactionArray
  })
}

export function editTransactionEntry(id, updatedTransaction) {
  return getTransactionEntries().then((transactions) => {
    const index = transactions.findIndex((transaction) => {
      return transaction.id === id
    })

    const newTransactionArray = [...transactions]
    newTransactionArray[index] = updatedTransaction
    saveLocally('Transactions', newTransactionArray)
    return newTransactionArray
  })
}

export function getTransactionEntry(id) {
  return getTransactionEntries().then((transactions) => {
    return transactions.find((transaction) => {
      return transaction.id === id
    })
  })
}
