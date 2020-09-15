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
