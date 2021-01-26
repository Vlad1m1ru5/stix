import PageLinkShortButton from 'components/page-link-short-button'
import PlaneCard from 'components/styled/plane-card'
import React from 'react'
import { AvailablePage } from 'types/page'

interface SiteLandingCardProps {
  availablePage: AvailablePage
}

const SiteLandingCard: React.FunctionComponent<SiteLandingCardProps> = ({ availablePage }) => (
  <PlaneCard centered>
    <PlaneCard.Header>
      <h1>Stix</h1>
    </PlaneCard.Header>
    <PlaneCard.Main>
      <p>Create your unique workspace with stickers</p>
    </PlaneCard.Main>
    <PlaneCard.Footer centered>
      <PageLinkShortButton toPage={availablePage.to}>{availablePage.action}</PageLinkShortButton>
    </PlaneCard.Footer>
  </PlaneCard>
)

export default SiteLandingCard
