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
      <header>
        <LargeMaxWidthLayout>
          <SiteHomePageLink />
        </LargeMaxWidthLayout>
      </header>
      <main>
        <LargeMaxWidthLayout>
          <SiteLandingCard availablePage={availableNewDashboardPage} />
        </LargeMaxWidthLayout>
      </main>
      <footer>
        <LargeMaxWidthLayout>
          <SiteCurrentYearCopyright currentYear={current2021Year} />
        </LargeMaxWidthLayout>
      </footer>
    </PageLayout>
  )
}

export default HomePage
