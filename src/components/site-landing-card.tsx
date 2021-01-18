import PlaneCard, {
  Footer as PlaneCardFooter,
  Header as PlaneCardHeader, 
  Main as PlaneCardMain
} from 'components/styled/plane-card'
import React from 'react'

const SiteLandingCard: React.FunctionComponent = () => (
  <PlaneCard centered>
    <PlaneCardHeader>
      <h1>Stix</h1>
    </PlaneCardHeader>
    <PlaneCardMain>
      <p>Create your unique workspace with stickers</p>
    </PlaneCardMain>
    <PlaneCardFooter>
      <button>Start</button>
    </PlaneCardFooter>
  </PlaneCard>
)

export default SiteLandingCard
