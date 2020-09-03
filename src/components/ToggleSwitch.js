import React from 'react'
import styled from 'styled-components/macro'
import './styles.css'

export default function Toggle({ toggled, onClick }) {
  return (
    <ToggleContainer onClick={onClick} toggled={toggled}>
      <ToggleNotch className="notch"></ToggleNotch>
    </ToggleContainer>
  )
}

const toggleColors = {
  true: 'green', //entspricht income
  false: 'red', //entspricht spending
}

const ToggleContainer = styled.div`
  height: 50px;
  width: 160px;
  border-radius: 20px;
  margin: auto;
  background: ${(props) => toggleColors[props.toggled]};
  position: relative;
  cursor: pointer;
`

const ToggleNotch = styled.div`
  height: 40px;
  width: 60px;
  border-radius: 20%;
  background: whitesmoke;
  position: absolute;
  top: 5px;
  left: 5px;
  box-shadow: 0 0 5px whitesmoke;
  z-index: 1;
  transition: all 0.3s ease;
`

/* // export default function ToggleSwitch({ text, toggled, onClick }) {
  //   return (
  //     <ToggleSwitchStyled onClick={onClick} toggled={toggled}>
  //       <ToggleNotch>{(text = 'Spending')}</ToggleNotch>
  //     </ToggleSwitchStyled>
  //   )
  // }

  // const ToggleSwitchStyled = styled.div */

//   position: relative;
//   height: 40px;
//   width: 180px;
//   border: 1px solid black;
//   background: ${(toggled) => (toggled === false ? 'red' : 'green')};
//

// const ToggleNotch = styled.div`
//   height: 35px;
//   width: 90px;
//   background-color: white;
//   margin: 2px;
//   position: absolute;
//   transform: translate(90px 0);
// `
