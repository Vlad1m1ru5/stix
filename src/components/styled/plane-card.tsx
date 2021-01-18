import styled from '@emotion/styled'

const PlaneCard = styled.article<{ centered?: boolean }>`
  border-radius: 8px;
  padding: 8px;
  border: 1px solid;
  ${({ centered }) => centered ? 'text-align: center;' : ''}
`

export default PlaneCard

export const Header = styled.header`
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

export const Main = styled.main`
  p {
    white-space: pre;
  }
`

export const Footer = styled.footer`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`
