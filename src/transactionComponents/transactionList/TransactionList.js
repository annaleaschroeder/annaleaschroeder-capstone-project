import React from 'react'
import Transaction from '../singleTransaction/Transaction'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

TransactionList.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default function TransactionList({ deleteTransaction, transactions }) {
  return (
    <StyledList data-cy="transactionsList">
      {transactions.map(({ timestamp, value, id, type, notes, tag }) => (
        <li key={id}>
          <Transaction
            deleteTransaction={(event) => {
              event.stopPropagation()
              if (window.confirm('Are you sure?')) {
                deleteTransaction(id)
              }
            }}
            createdAt={timestamp}
            newTransaction={value}
            type={type}
            notes={notes}
            tag={tag}
            id={id}
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
