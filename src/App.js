import React from 'react'
import Header from './components/Header'
import TransactionFormInput from './components/TransactionFormInput'

function App() {
  return (
    <div>
      <Header date={new Date()} />
      <TransactionFormInput />
    </div>
  )
}
export default App
