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
    color:
      type === 'spending'
        ? 'var(--red-transaction)'
        : 'var(--green-transaction)',
  }

  const tagBackground = {
    background:
      tag === 'Leisure'
        ? 'var(--tag-leisure)'
        : tag === 'Food'
        ? 'var(--tag-food)'
        : tag === 'Transportation'
        ? 'var(--tag-transportation)'
        : tag === 'Leisure'
        ? 'var(--tag-leisure)'
        : tag === 'Fixed Costs'
        ? 'var(--tag-fixed-cost)'
        : tag === 'Miscellaneous'
        ? 'var(--tag-misc)'
        : tag === 'Earnings'
        ? 'var(--tag-earnings)'
        : 'white',
  }

  const formatCurrency = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(newTransaction)
  const value = `${type === 'spending' ? '-' : '+'}${formatCurrency}`

  return (
    <StyledTransaction>
      <TimestampStyled>{createdAt}</TimestampStyled>
      <TagContainer>
        <TagStyled style={tagBackground}>{tag}</TagStyled>
      </TagContainer>
      <ValueStyled style={style}>{value}</ValueStyled>
      <NotesStyled>{notes}</NotesStyled>
    </StyledTransaction>
  )
}

const StyledTransaction = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  grid-template-rows: auto;
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
  line-height: 2;
`

const TagContainer = styled.span`
  grid-column: 2 / 3;
  line-height: 2;
  justify-self: center;
`

const TagStyled = styled.div`
  display: block;
  color: white;
  border: 1px solid darkgrey;
  text-align: center;
  word-break: normal;
  width: min-content;
`

const ValueStyled = styled.span`
  grid-column: 3 / 4;
  justify-self: end;
  line-height: 2;
`

const NotesStyled = styled.p`
  grid-row: 2 / 3;
  grid-column: 1 / span 3;
  text-align: left;
  word-break: break-all;
`
