import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Header.propTypes = {
  date: PropTypes.object.isRequired,
}

export default function Header({ date }) {
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

  const year = date.getFullYear()
  const monthNumber = date.getMonth()
  const newMonth = month[monthNumber]

  return (
    <HeaderStyled>
      <Headline>Budget Overview</Headline>
      <SubHeadline>{newMonth + ' ' + year}</SubHeadline>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  position: fixed;
  width: 100vw;
  z-index: 200;
  background-color: hotpink;
  padding: 10px;
`

const Headline = styled.h1`
  text-align: center;
  margin: 0%;
  font-size: 200%;
`
const SubHeadline = styled.h2`
  text-align: center;
  margin: 0%;
  font-size: 150%;
`
