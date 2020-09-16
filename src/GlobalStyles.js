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
    --tag-earnings: #026873;
    --tag-food: #F28888;
    --tag-transportation: #F2CB9B;
    --tag-leisure: #F2BDBD;
    --tag-fixed-cost: #038C8C;
    --tag-misc: #F2E7FB;

}
`
