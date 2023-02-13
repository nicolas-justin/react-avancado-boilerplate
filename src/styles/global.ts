import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *,
  ::before,
  ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-style: 62.5%;
  }

  body {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  html,
  body,
  #__next {
    height: 100%;
  }
`

export default GlobalStyles
