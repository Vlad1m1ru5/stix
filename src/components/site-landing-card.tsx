import PlaneCard from 'components/styled/plane-card'
import React from 'react'

const SiteLandingCard: React.FunctionComponent = () => (
  <PlaneCard centered>
    <PlaneCard.Header>
      <h1>Stix</h1>
    </PlaneCard.Header>
    <PlaneCard.Main>
      <p>Create your unique workspace with stickers</p>
    </PlaneCard.Main>
    <PlaneCard.Footer centered>
      <button>Start</button>
    </PlaneCard.Footer>
  </PlaneCard>
)

export default SiteLandingCard
