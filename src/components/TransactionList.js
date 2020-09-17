import React from 'react'
import Transaction from './Transaction'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

TransactionList.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default function TransactionList({ transactions }) {
  return (
    <StyledList>
      {transactions.map(({ timestamp, value, id, type, notes, tag }) => (
        <li key={id}>
          <Transaction
            createdAt={timestamp}
            newTransaction={value}
            type={type}
            notes={notes}
            tag={tag}
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
