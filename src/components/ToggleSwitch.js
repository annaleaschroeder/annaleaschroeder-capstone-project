import React from 'react'
import styled from 'styled-components/macro'

export default function ToggleSwitch({ text, toggled, onClick }) {
  return (
    <ToggleSwitchStyled onClick={onClick}>
      <ToggleNotch>{(text = 'Spending')}</ToggleNotch>
    </ToggleSwitchStyled>
  )
}

const ToggleSwitchStyled = styled.div`
  height: 40px;
  width: 180px;
  border: 1px solid black;
  background-color: red;
  position: relative;
`

const ToggleNotch = styled.div`
  height: 35px;
  width: 90px;
  background-color: white;
  margin: 2px;
  position: absolute;
`
