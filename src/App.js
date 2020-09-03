import React, { useState } from 'react'
import Header from './components/Header'
import Toggle from './components/ToggleSwitch'

//import TransactionInputPage from './components/TransactionInputPage'

function App() {
  const [isToggled, setIsToggled] = useState(false)
  return (
    <div>
      <Header date={new Date()} />
      <Toggle
        id="test-switch"
        toggled={isToggled}
        onChange={(event) => setIsToggled(event.target.checked)}
      />
      {/* <TransactionInputPage /> */}
    </div>
  )
}
export default App
