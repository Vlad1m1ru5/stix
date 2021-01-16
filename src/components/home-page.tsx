import React from 'react'
import PageLayout from 'components/styled/page-layout'
import SiteHomePageLink from 'components/site-home-page-link'
import LargeMaxWidthLayout from 'components/large-max-width-layout'

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
