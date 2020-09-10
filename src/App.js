import React from 'react'
import Header from './components/Header'
import TransactionInputPage from './components/TransactionInputPage'

function App() {
  return (
    <div>
      <Header date={new Date()} />
      <TransactionInputPage />
    </div>
  )
}
export default App
