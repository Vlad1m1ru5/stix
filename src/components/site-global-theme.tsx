import GlobalStyles from 'components/styled/global-styles'
import React from 'react'

const SiteGlobalTheme: React.FunctionComponent = ({ children }) => (
  <>
    {children}
    <GlobalStyles />
  </>
)

export default SiteGlobalTheme
