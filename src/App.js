import React from 'react'
import Header from './components/header/Header'
import TransactionOverviewPage from './components/pages/TransactionOverviewPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AddTransactionPage from './components/pages/AddTransactionPage'
import EditTransactionPage from './components/pages/EditTransactionPage'

function App() {
  return (
    <div>
      <Header date={new Date()} />
      <Router>
        <Switch>
          <Route path="/add-new-transaction">
            <AddTransactionPage />
          </Route>
          <Route path="/transactions/:id">
            <EditTransactionPage />
          </Route>
          <Route path="/">
            <TransactionOverviewPage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
export default App
