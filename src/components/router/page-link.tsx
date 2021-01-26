import React from 'react'
import { Link } from 'react-router-dom'

interface PageLinkProps {
  to: string
}

const PageLink: React.FunctionComponent<PageLinkProps> = ({ to, children }) => <Link to={to}>{children}</Link>

export default PageLink
