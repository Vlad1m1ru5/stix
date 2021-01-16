import GlobalTheme from 'components/styled/global-theme'
import React from 'react'

const SiteGlobalTheme: React.FunctionComponent = ({ children }) => (
  <>
    {children}
    <GlobalTheme />
  </>
)

export default SiteGlobalTheme
