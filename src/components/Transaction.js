import React from 'react'
import styled from 'styled-components/macro'

export default function Transaction({
  createdAt,
  newTransaction,
  type,
  notes,
  tag,
}) {
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
      <TagStyled>{tag}</TagStyled>
      <ValueStyled style={style}>{value}</ValueStyled>
      <NotesStyled>{notes}</NotesStyled>
    </StyledTransaction>
  )
}

const StyledTransaction = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  grid-template-rows: 1fr 1fr;
  border: 2px solid transparent;
  box-shadow: 5px 5px 10px #d5dadd;
  margin: 25px 0;
  padding: 5px;
  border-radius: 5px;
  grid-gap: 5px;
  word-break: break-all;
`
const TimestampStyled = styled.span`
  grid-column: 1 / 2;
`

const TagStyled = styled.span`
  grid-column: 2 / 3;
`

const ValueStyled = styled.span`
  grid-column: 3 / 4;
  justify-self: end;
`

const NotesStyled = styled.p`
  grid-row: 2 / 3;
  grid-column: 1 / span 3;
  text-align: left;
  word-break: break-all;
`
