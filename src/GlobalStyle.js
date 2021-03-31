import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  height: 100%;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  height: 100%;
  /* background-color: #f0f8fa; */
  background-color: #eaf3f5;
  -webkit-font-smoothing: antialiased;
  font-family: 'Mulish', sans-serif;
  max-width: 1550px;
  margin-right: auto;
  margin-left: auto;
  box-shadow: 0 0 100px 0 rgb(0 0 0 / 9%);
  -webkit-box-shadow: 0 0 100px 0 rgb(0 0 0 / 9%);
}
`
