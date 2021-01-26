import styled from '@emotion/styled'
import React from 'react'

interface PlaneCardProps { centered?: boolean }

const BasePlaneCard = styled.article<PlaneCardProps>`
  border-radius: 8px;
  padding: 32px;
  border: 1px solid;
  ${({ centered }) => centered ? 'text-align: center' : ''};
`

const PlaneCardHeader = styled.header`
  & h1 {
    font-size: 7rem;
  }

  & h2 {
    font-size: 4rem;
  }

  & h3 {
    font-size: 3rem;
  }
`

const PlaneCardMain = styled.main`
  p {
    white-space: pre;
  }
`

const PlaneCardFooter = styled.footer<PlaneCardProps>`
  display: flex;
  flex-flow: row nowrap;
  justify-content: ${({ centered }) => centered ? 'center' : 'start'};
`

type PlaneCardComponent = React.FunctionComponent<PlaneCardProps> & { 
  Header: typeof PlaneCardHeader;
  Main: typeof PlaneCardMain;
  Footer: typeof PlaneCardFooter;
 }

const PlaneCard: PlaneCardComponent = ({ children, centered }) => (
  <BasePlaneCard centered={centered}>
    {children}
  </BasePlaneCard>
)

PlaneCard.Header = PlaneCardHeader
PlaneCard.Main = PlaneCardMain
PlaneCard.Footer = PlaneCardFooter

export default PlaneCard
