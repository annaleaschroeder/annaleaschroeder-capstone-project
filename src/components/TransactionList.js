import React from 'react'
import Transaction from './Transaction'
import styled from 'styled-components/macro'
export default function TransactionList({ transactions }) {
  console.log(transactions)

  return (
    <StyledList>
      {transactions.map(({ timestamp, value, id, type }) => (
        <li key={id}>
          <Transaction
            createdAt={timestamp}
            newTransaction={value}
            type={type}
          />
        </li>
      ))}
    </StyledList>
  )
}

const StyledList = styled.ul`
  list-style: none;
  padding-left: 0;
`
