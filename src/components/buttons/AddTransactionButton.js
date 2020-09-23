import React from 'react'
import styled from 'styled-components/macro'

export default function AddTransactionButton() {
  return (
    <ButtonContainer>
      <AddTrxRoute href="/add-new-transaction">
        <AddTrxButton>
          <AddImage
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          </AddImage>
          <ButtonText>Add Transaction</ButtonText>
        </AddTrxButton>
      </AddTrxRoute>
    </ButtonContainer>
  )
}

const ButtonContainer = styled.div`
  display: flex;
  height: fit-content;
  width: auto;
  justify-content: right;
`

const AddTrxRoute = styled.a`
  text-decoration: none;
`

const AddTrxButton = styled.button`
  display: flex;
  border: none;
  box-shadow: 5px 5px 10px var(--grey-shadow);
  border-radius: 5px;
  cursor: pointer;
`
const ButtonText = styled.span`
  align-items: center;
  padding-top: 4px;
`
const AddImage = styled.svg`
  display: inline;
  justify-items: center;
`
