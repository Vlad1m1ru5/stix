import { css } from '@emotion/react'
import React from 'react'

const ImposterLayout: React.FunctionComponent = ({ children }) => (
  <div css={imposterCss}>
    {children}
  </div>
)

export default ImposterLayout

const imposterCss = css`
  width: 100vw;
  height: 100vh;
`
