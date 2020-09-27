import React from 'react'
import Header from './header/Header'
import TransactionOverviewPage from './pages/TransactionOverviewPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AddTransactionPage from './pages/AddTransactionPage'
import EditTransactionPage from './pages/EditTransactionPage'

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
