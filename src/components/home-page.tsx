import LargeMaxWidthLayout from 'components/large-max-width-layout'
import SiteCurrentYearCopyright from 'components/site-current-year-copyright'
import SiteHomePageLink from 'components/site-home-page-link'
import SiteLandingCard from 'components/site-landing-card'
import PageLayout from 'components/styled/page-layout'
import React from 'react'
import { AvailablePage } from 'types/page'

const HomePage: React.FunctionComponent = () => {

  const current2021Year = '2021'

  const availableNewDashboardPage: AvailablePage = {
    to: '/dashboard',
    action: 'Start'
  }

  return (
    <PageLayout>
      <PageLayout.Header>
        <LargeMaxWidthLayout>
          <SiteHomePageLink />
        </LargeMaxWidthLayout>
      </PageLayout.Header>
      <PageLayout.Main>
        <LargeMaxWidthLayout>
          <SiteLandingCard availablePage={availableNewDashboardPage} />
        </LargeMaxWidthLayout>
      </PageLayout.Main>
      <PageLayout.Footer>
        <LargeMaxWidthLayout>
          <SiteCurrentYearCopyright currentYear={current2021Year} />
        </LargeMaxWidthLayout>
      </PageLayout.Footer>
    </PageLayout>
  )
}

export default HomePage
