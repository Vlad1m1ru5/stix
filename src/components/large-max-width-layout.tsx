import MaxWidthLayout from 'components/styled/max-width-layout'
import React from 'react'

const LargeMaxWidthLayout: React.FunctionComponent = ({ children }) => {

  const largeMaxWidth = '1220px'

  return (
    <MaxWidthLayout maxWidth={largeMaxWidth}>
      {children}
    </MaxWidthLayout>
  )
}

export default LargeMaxWidthLayout
