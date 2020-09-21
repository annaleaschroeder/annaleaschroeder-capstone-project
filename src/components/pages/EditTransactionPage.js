// import React, { useState } from 'react'
// import TransactionFormInput from '../TransactionFormInput'
// import ToggleSwitch from '../ToggleSwitch'
// import styled from 'styled-components/macro'
// import { postNewTransactionEntry,  } from '../utils/services'

// export default function AddTransactionPage() {
//   const [selected, setSelected] = useState(false)

//   return (
//     <PageStyled>
//       <ToggleSwitch selected={selected} onToggle={handleToggle} />
//       <TransactionFormInput onSave={onSaveAddTransactionEntry} />
//       <a href="/">
//         <button>Return to budget overview</button>
//       </a>
//     </PageStyled>
//   )
//   function handleToggle() {
//     setSelected(!selected)
//   }

//   function onSaveEditTransactionEntry()

//   // function onSaveAddTransactionEntry(newTransactionValue, notes, tag) {
//   //   const newTransaction = {
//   //     type: selected ? 'income' : 'spending',
//   //     value: parseFloat(newTransactionValue.replace(',', '.')),
//   //     notes: notes,
//   //     tag: tag,
//   //   }

//     // postNewTransactionEntry(newTransaction)
//     // setSelected(false)
//   }
// }

// const PageStyled = styled.div`
//   margin: 20px;
// `
