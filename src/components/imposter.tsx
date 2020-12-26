import { css } from '@emotion/react'
import React from 'react'

const Imposter: React.FunctionComponent = ({ children }) => (
  <div css={imposterCss}>
    {children}
  </div>
)

export default Imposter

const imposterCss = css`
  width: 100vw;
  height: 100vh;
`
