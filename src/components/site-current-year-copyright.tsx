import React from 'react'

interface SiteCurrentYearCopyrightProps {
  currentYear: string
}

const SiteCurrentYearCopyright: React.FunctionComponent<SiteCurrentYearCopyrightProps> = ({ currentYear }) => (
  <p>&copy; {currentYear}</p>
)

export default SiteCurrentYearCopyright
