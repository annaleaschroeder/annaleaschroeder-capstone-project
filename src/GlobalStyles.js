import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
* {
    box-sizing: border-box;
    font-family: "Lato", sans-serif;
}
body {
    margin: 0;
    font-size: 112.5%;
}

:root {
    --blue-main: linear-gradient(
    90deg,
    rgba(45, 121, 219, 1) 0%,
    rgba(72, 150, 250, 1) 100%);
    --red-transaction: red;
    --green-transaction: green; 
    --toggle-income: #d54062;
    --toggle-spending: #158467;
    --tag-earnings: #313D29;
    --tag-food: #EE964B;
    --tag-transportation: #F2CB40;
    --tag-leisure: #2DC8C8;
    --tag-fixed-cost: #2598A7;
    --tag-misc: #19647E;
}
`
