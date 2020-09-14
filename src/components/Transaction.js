import React from 'react'
import styled from 'styled-components/macro'

export default function Transaction({ createdAt, newTransaction, type }) {
  const style = {
    color: type === 'spending' ? 'red' : 'green',
  }

  const formatCurrency = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(newTransaction)
  const value = `${type === 'spending' ? '-' : '+'}${formatCurrency}`

  return (
    <StyledTransaction>
      <TimestampStyled>{createdAt}</TimestampStyled>
      <ValueStyled style={style}>{value}</ValueStyled>
    </StyledTransaction>
  )
  // <section style={style}>{createdAt + ' ' + value}</section>
}

const StyledTransaction = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  border: 2px solid transparent;
  box-shadow: 5px 5px 10px #d5dadd;
  margin: 20px;
  padding: 5px;
  border-radius: 5px;
  grid-gap: 5px;
  word-break: break-all;
`
const TimestampStyled = styled.span`
  grid-column: 1 / 2;
`

const ValueStyled = styled.span`
  grid-column: 2 / 3;
  justify-self: end;
`
