import { css, Global } from '@emotion/react'
import React from 'react'

const GlobalStyles: React.FunctionComponent = () => {

  const globalStyles = css`
    html,
    body {
      margin: 0;
      font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 14px;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
  `

  return <Global styles={globalStyles} />

}

export default GlobalStyles
