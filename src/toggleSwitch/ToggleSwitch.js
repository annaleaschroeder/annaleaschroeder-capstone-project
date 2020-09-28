import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

ToggleSwitch.propTypes = {
  selected: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
}

export default function ToggleSwitch({ selected, onToggle }) {
  return (
    <ToggleWrapper>
      <ToggleContainer onClick={onToggle}>
        <DialogueSlider className={selected ? '' : 'changeColor'}>
          {selected ? 'Income' : 'Spending'}
        </DialogueSlider>
      </ToggleContainer>
    </ToggleWrapper>
  )
}

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const ToggleContainer = styled.div`
  position: relative;
  width: 154px;
  height: 49px;
  margin-bottom: 10px;
  border-radius: 3px;
  padding: 2px;
  background-color: #c4c4c4;
  cursor: pointer;
  user-select: none;
`

const DialogueSlider = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80%;
  font-weight: bold;
  line-height: 16px;
  color: white;
  background-color: var(--toggle-spending);
  padding: 8px 12px;
  border-radius: 3px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 80px;
  height: 45px;
  left: 72px;
  transition: all 0.5s cubic-bezier(0.9, 0.06, 0.68, 0.19);

  &.changeColor {
    background-color: var(--toggle-income);
    left: 2px;
  }
`
