import React from 'react'
import styled from 'styled-components/macro'

export default function DeleteButton({ onClick }) {
  return (
    <StyledButton onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        fill="grey"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
      </svg>
    </StyledButton>
  )
}

const StyledButton = styled.button`
  position: absolute;
  top: -10px;
  right: -35px;
  width: auto;
  height: auto;
  padding: 4px;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`
