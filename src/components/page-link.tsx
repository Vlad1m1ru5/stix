import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
  to: string
}

const PageLink: React.FunctionComponent<Props> = ({ to, children }) => <Link to={to}>{children}</Link>

export default PageLink
