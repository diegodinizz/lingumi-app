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
  min-height: 100%;
  margin: 0;
  background-color: #eaf3f5;
  -webkit-font-smoothing: antialiased;
  font-family: 'Mulish', sans-serif;
}
`
