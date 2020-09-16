import React from 'react'
import styled from 'styled-components'

export default {
  title: 'Design',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}

export const Colors = () => {
  return (
    <>
      <Row>
        <ColorExample name="red-transaction" hex="#ff1808" />
        <ColorExample name="green-transaction" hex="#47f018" />
        <ColorExample name="toggle-income" hex="#d54062" />
        <ColorExample name="toggle-spending" hex="#158467" />
      </Row>
      <Row>
        <ColorExample name="tag-earnings" hex="#026873" />
        <ColorExample name="tag-food" hex="#F28888" />
        <ColorExample name="tag-transportation" hex="#E0E4E" />
        <ColorExample name="tag-leisure" hex="#F2BDBD" />
      </Row>
      <Row>
        <ColorExample name="tag-fixed-cost" hex="#038C8C" />
        <ColorExample name="tag-misc" hex="#c0dded" />
      </Row>
    </>
  )
}

function ColorExample({ name, hex }) {
  return (
    <CenterColumn>
      <ColorBox name={name} />
      <p>{name}</p>
      <p>{hex}</p>
    </CenterColumn>
  )
}

const CenterColumn = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin: 0;
  }
`

const Row = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin: 20px;
`

const ColorBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => 'var(--' + props.name + ')'};
`
