import styled from '@emotion/styled'
import React from 'react'

const BasePageLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  & > * {
    padding-top: 20px;
    padding-bottom: 20px;

    &:not(:last-child) {
      border-bottom: 1px solid;
    }
  }

  & > main {
    flex-grow: 1;
  }
`

const PageLayoutHeader = styled.header``

const PageLayoutMain = styled.main``

const PageLayoutFooter = styled.footer``

type PageLayoutComponent = React.FunctionComponent & {
  Header: typeof PageLayoutHeader,
  Main: typeof PageLayoutMain,
  Footer: typeof PageLayoutFooter
}

const PageLayout: PageLayoutComponent = ({ children }) => (
  <BasePageLayout>
    {children}
  </BasePageLayout>
)

PageLayout.Header = PageLayoutHeader
PageLayout.Main = PageLayoutMain
PageLayout.Footer = PageLayoutFooter

export default PageLayout
