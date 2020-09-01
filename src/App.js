import React from 'react'
import Header from './components/Header'
import TransactionInput from './components/TransactionInput'

function App() {
  return (
    <div>
      <Header date={new Date()} />
      <TransactionInput />
    </div>
  )
}
export default App
