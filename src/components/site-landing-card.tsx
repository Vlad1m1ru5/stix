import PlaneCard, { Footer as PlaneCardFooter, Header as PlaneCardHeader } from 'components/styled/plane-card'
import React from 'react'

const SiteLandingCard: React.FunctionComponent = () => (
  <PlaneCard centered>
    <PlaneCardHeader>
      <h1>Stix</h1>
    </PlaneCardHeader>
    <PlaneCard.Body>
      <p>Create your unique workspace with stickers</p>
    </PlaneCard.Body>
    <PlaneCardFooter>
      <button>Start</button>
    </PlaneCardFooter>
  </PlaneCard>
)

export default SiteLandingCard
