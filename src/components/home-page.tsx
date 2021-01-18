import LargeMaxWidthLayout from 'components/large-max-width-layout'
import SiteHomePageLink from 'components/site-home-page-link'
import SiteLandingCard from 'components/site-landing-card'
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
        <SiteLandingCard />
      </LargeMaxWidthLayout>
    </main>
    <footer>
      <LargeMaxWidthLayout>
        
      </LargeMaxWidthLayout>
    </footer>
  </PageLayout>
)

export default HomePage
