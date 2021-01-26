import LargeMaxWidthLayout from 'components/large-max-width-layout'
import SiteCurrentYearCopyright from 'components/site-current-year-copyright'
import SiteHomePageLink from 'components/site-home-page-link'
import PageLayout from 'components/styled/page-layout'
import React from 'react'

const DashboardPage: React.FunctionComponent = () => {

  const current2021Year = '2021'

  return (
    <PageLayout>
      <header>
        <LargeMaxWidthLayout>
          <SiteHomePageLink />
        </LargeMaxWidthLayout>
      </header>
      <main>
        <LargeMaxWidthLayout>
          DASHBOARD
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

export default DashboardPage
