import React from 'react'
import Header from './common/header/Header'
import TransactionOverviewPage from './pages/TransactionOverviewPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AddTransactionPage from './pages/AddTransactionPage'
import EditTransactionPage from './pages/EditTransactionPage'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/add-new-transaction">
            <Header title="Add new Transaction" date={new Date()} />
            <AddTransactionPage />
          </Route>
          <Route path="/transactions/:id">
            <Header title="Edit transaction" date={new Date()} />
            <EditTransactionPage />
          </Route>
          <Route path="/">
            <Header title="Budget Overview" date={new Date()} />
            <TransactionOverviewPage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
export default App
