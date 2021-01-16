import React from 'react'
import PageLink from 'components/router/page-link'
import SiteTitle from 'components/styled/site-title'

const SiteHomePageLink: React.FunctionComponent = () => {
 
  const homePageRoute = '/home'

  return (
    <PageLink to={homePageRoute}>
      <SiteTitle>Stix</SiteTitle>
    </PageLink>
  )

}

export default SiteHomePageLink
