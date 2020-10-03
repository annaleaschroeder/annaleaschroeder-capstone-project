import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Header.propTypes = {
  date: PropTypes.object.isRequired,
}

const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export default function Header({ date, title }) {
  const year = date.getFullYear()
  const monthNumber = date.getMonth()
  const newMonth = month[monthNumber]

  return (
    <HeaderStyled>
      <Headline>{title}</Headline>
      <SubHeadline>{newMonth + ' ' + year}</SubHeadline>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  width: 100%;
  z-index: 200;
  background: var(--blue-main);
  background-size: cover;
  padding: 10px;
  text-align: center;
`

const Headline = styled.h1`
  text-align: center;
  margin: 0;
  font-size: 200%;
  display: block;
  color: var(--white);
`
const SubHeadline = styled.h2`
  text-align: center;
  margin: 0;
  font-size: 150%;
  display: block;
  color: var(--white);
`
