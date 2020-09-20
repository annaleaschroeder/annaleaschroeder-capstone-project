import React from 'react'
import styled from 'styled-components/macro'

export default function EditButton({ onClick }) {
  return (
    <StyledButton onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
      </svg>
    </StyledButton>
  )
}

const StyledButton = styled.button`
  position: absolute;
  top: 30px;
  right: -30px;
  width: fit-content;
  height: fit-content;
  padding: 4px;
  background-color: white;
  box-shadow: 2px 2px 5px var(--grey-shadow);
  border-radius: 50%;
  border: 1px dotted var(--grey-shadow);
`
