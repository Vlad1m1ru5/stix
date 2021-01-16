import GlobalStyles from 'components/styled/global-styles'
import React from 'react'

const SiteGlobalStyles: React.FunctionComponent = ({ children }) => (
  <>
    {children}
    <GlobalStyles />
  </>
)

export default SiteGlobalStyles
