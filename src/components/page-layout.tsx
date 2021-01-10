import { css } from '@emotion/react'
import React from 'react'

const PageLayout: React.FunctionComponent = ({ children }) => (
  <div css={pageCss}>
    {children}
  </div>
)

export default PageLayout

const pageCss = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  & > main {
    flex-grow: 1;
  }
`
