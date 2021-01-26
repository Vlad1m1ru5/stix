import PageLink from 'components/router/page-link'
import ShortButton from 'components/styled/short-button'
import React from 'react'

interface PageLinkShortButtonProps {
  toPage: string
}

const PageLinkShortButton: React.FunctionComponent<PageLinkShortButtonProps> = ({ children, toPage }) => (
  <ShortButton>
    <PageLink to={toPage}>{children}</PageLink>
  </ShortButton>
)

export default PageLinkShortButton
