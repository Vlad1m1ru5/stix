import styled from '@emotion/styled'
import React from 'react'

interface CenteredProps { centered?: boolean }

const BasePlaneCard = styled.article<CenteredProps>`
  border-radius: 8px;
  padding: 8px;
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

const PlaneCardFooter = styled.footer<CenteredProps>`
  display: flex;
  flex-flow: row nowrap;
  justify-content: ${({ centered }) => centered ? 'center' : 'start'};
`

type PlaneCardComponent = React.FunctionComponent<CenteredProps> & { 
  Header: typeof PlaneCardHeader;
  Main: typeof PlaneCardMain;
  Footer: typeof PlaneCardFooter;
 }

const PlaneCard: PlaneCardComponent = ({ children, ...restProps }) => (
  <BasePlaneCard {...restProps}>
    {children}
  </BasePlaneCard>
)

PlaneCard.Header = PlaneCardHeader
PlaneCard.Main = PlaneCardMain
PlaneCard.Footer = PlaneCardFooter

export default PlaneCard
