import React from 'react'
import { css, Global } from '@emotion/react'

const GlobalTheme: React.FunctionComponent = () => <Global styles={globalStyles} />

export default GlobalTheme

const globalStyles = css`
  html,
  body {
    margin: 0;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
  }
`
