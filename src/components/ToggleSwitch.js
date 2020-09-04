import React from 'react'
import styled from 'styled-components/macro'

export default function ToggleSwitch({ toggled, onChange }) {
  return <Switch id="test-switch" toggled={toggled} onChange={onChange} />
}

const Switch = ({ id, toggled, onChange }) => {
  return (
    <>
      <SwitchContainer>
        <SpendingRed>Spending</SpendingRed>
        <HiddenSwitchInput
          className="switch-checkbox"
          id={id}
          type="checkbox"
          checked={toggled}
          onChange={onChange}
        />
        <SwitchLabel toggled={toggled} className="switch-label" htmlFor={id}>
          <SwitchButton className="switch-button"></SwitchButton>
        </SwitchLabel>
        <IncomeGreen>Income</IncomeGreen>
      </SwitchContainer>
    </>
  )
}

const SwitchContainer = styled.div`
  display: flex;
  justify-content: center;
`
const SpendingRed = styled.div`
  color: red;
  font-weight: bold;
`
const IncomeGreen = styled.div`
  color: green;
  font-weight: bold;
`
const toggleColors = {
  true: '#36ffa1', //refers to income
  false: '#ff7a78', //refers to spending
}

const HiddenSwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`

const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 100px;
  height: 40px;
  border-radius: 100px;
  border: 2px solid gray;
  position: relative;
  background: ${(props) => toggleColors[props.toggled]};
  transition: background-color 0.2s;
`

const SwitchButton = styled.span`
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 36px;
  height: 36px;
  border-radius: 45px;
  transition: 0.2s;
  background: grey;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  ${HiddenSwitchInput}:checked + ${SwitchLabel} & {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  ${SwitchLabel}:active & {
    width: 45px;
  }
`
