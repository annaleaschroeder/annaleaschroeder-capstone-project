import React from 'react'
import styled from 'styled-components/macro'

export default function ToggleSwitch({ toggled, onChange }) {
  return (
    <div>
      <Switch id="test-switch" toggled={toggled} onChange={onChange} />
    </div>
  )
}

const Switch = ({ id, toggled, onChange }) => {
  return (
    <>
      <SwitchInput
        className="switch-checkbox"
        id={id}
        type="checkbox"
        checked={toggled}
        onChange={onChange}
      />
      <SwitchLabel toggled={toggled} className="switch-label" htmlFor={id}>
        <SwitchButton className="switch-button"></SwitchButton>
      </SwitchLabel>
    </>
  )
}

const toggleColors = {
  true: '#36ffa1', //entspricht income
  false: '#ff7a78', //entspricht spending
}

const SwitchInput = styled.input`
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
  ${SwitchInput}:checked + ${SwitchLabel} & {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  ${SwitchLabel}:active & {
    width: 45px;
  }
`

// export default function Toggle({ toggled, onClick }) {
//   return (
//     <ToggleContainer onClick={onClick} toggled={toggled}>
//       <ToggleNotch className="notch"></ToggleNotch>
//     </ToggleContainer>
//   )
// }

// const toggleColors = {
//   true: 'green', //entspricht income
//   false: 'red', //entspricht spending
// }

// const ToggleContainer = styled.div`
//   height: 50px;
//   width: 160px;
//   border-radius: 20px;
//   margin: auto;
//   background: ${(props) => toggleColors[props.toggled]};
//   position: relative;
//   cursor: pointer;
// `

// const ToggleNotch = styled.div`
//   height: 40px;
//   width: 60px;
//   border-radius: 20%;
//   background: whitesmoke;
//   position: absolute;
//   top: 5px;
//   left: 5px;
//   box-shadow: 0 0 5px whitesmoke;
//   z-index: 1;
//   transition: all 0.3s ease;
// `

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
