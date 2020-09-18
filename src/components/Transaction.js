import React from 'react'
import styled from 'styled-components/macro'
import DeleteButton from './DeleteButton'
import PropTypes from 'prop-types'

Transaction.propTypes = {
  createdAt: PropTypes.string.isRequired,
  newTransaction: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  notes: PropTypes.string,
  tag: PropTypes.string.isRequired,
}

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

  const tagBorder = {
    'border-color':
      tag === 'Leisure'
        ? 'var(--tag-leisure)'
        : tag === 'Food'
        ? 'var(--tag-food)'
        : tag === 'Transportation'
        ? 'var(--tag-transportation)'
        : tag === 'Leisure'
        ? 'var(--tag-leisure)'
        : tag === 'FixedCosts'
        ? 'var(--tag-fixed-cost)'
        : tag === 'Miscellaneous'
        ? 'var(--tag-misc)'
        : tag === 'Earnings'
        ? 'var(--tag-earnings)'
        : 'white',
  }

  const tagFontColor = {
    color:
      tag === 'Leisure'
        ? 'var(--tag-leisure)'
        : tag === 'Food'
        ? 'var(--tag-food)'
        : tag === 'Transportation'
        ? 'var(--tag-transportation)'
        : tag === 'Leisure'
        ? 'var(--tag-leisure)'
        : tag === 'FixedCosts'
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
    <>
      <TimestampStyled>{createdAt}</TimestampStyled>
      <StyledTransaction>
        <DeleteButton />
        <TagContainer>
          <TagStyled style={(tagBorder, tagFontColor)}>{tag}</TagStyled>
        </TagContainer>
        <ValueStyled style={style}>{value}</ValueStyled>
        <NotesStyled>{notes}</NotesStyled>
      </StyledTransaction>
    </>
  )
}

const TimestampStyled = styled.span`
  font-weight: bold;
`

const StyledTransaction = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto;
  position: relative;
  border: 2px solid transparent;
  box-shadow: 5px 5px 10px #d5dadd;
  margin-bottom: 20px;
  margin-right: 15px;
  padding: 5px;
  border-radius: 20px;
  word-break: break-all;
  line-height: 1.5;
`

const TagContainer = styled.span`
  grid-column: 1 / 2;
  padding-top: 2px;
`

const TagStyled = styled.div`
  display: block;
  color: black;
  border: 2px solid;
  border-radius: 20px;
  text-align: center;
  word-break: keep-all;
  width: min-content;
  padding: 0 5px;
  font-size: 90%;
`

const ValueStyled = styled.span`
  grid-column: 2 / 3;
  justify-self: end;
  padding: 5px;
`

const NotesStyled = styled.p`
  grid-row: 2 / 3;
  grid-column: 1 / span 3;
  text-align: left;
  word-break: break-all;
  padding: 5px;
`
