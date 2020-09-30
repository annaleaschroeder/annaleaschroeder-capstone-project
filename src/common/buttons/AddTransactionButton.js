import React from 'react'
import styled from 'styled-components/macro'

export default function AddTransactionButton() {
  return (
    <AddTrxRoute href="/add-new-transaction">
      <AddImage
        xmlns="http://www.w3.org/2000/svg"
        height="40"
        viewBox="0 0 24 24"
        width="40"
        fill="white"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
      </AddImage>
    </AddTrxRoute>
  )
}

const AddTrxRoute = styled.a`
  text-decoration: none;
  display: flex;
  border: none;
  border-radius: 50px;
  box-shadow: 5px 5px 10px var(--grey-shadow);
  background: var(--blue-main);
  padding: 20px;
  cursor: pointer;
  position: fixed;
  z-index: 10;
  bottom: 40px;
`

const AddImage = styled.svg`
  display: inline;
  justify-items: center;
`
