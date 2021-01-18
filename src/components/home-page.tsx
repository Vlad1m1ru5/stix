import LargeMaxWidthLayout from 'components/large-max-width-layout'
import SiteHomePageLink from 'components/site-home-page-link'
import PageLayout from 'components/styled/page-layout'
import React from 'react'

const HomePage: React.FunctionComponent = () => (
  <PageLayout>
    <header>
      <LargeMaxWidthLayout>
        <SiteHomePageLink />
      </LargeMaxWidthLayout>
    </header>
    <main>
      <LargeMaxWidthLayout>

      </LargeMaxWidthLayout>
    </main>
    <footer>
      <LargeMaxWidthLayout>
        
      </LargeMaxWidthLayout>
    </footer>
  </PageLayout>
)

export default HomePage
