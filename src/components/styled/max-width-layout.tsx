import styled from '@emotion/styled'

const MaxWidthLayout = styled.div<{ maxWidth: string }>(
  ({ maxWidth }) => ({
    maxWidth,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '1rem',
    paddingRight: '1rem'
  })
)

export default MaxWidthLayout
