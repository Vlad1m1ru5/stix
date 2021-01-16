import styled from '@emotion/styled'

const MaxWidthLayout = styled.div<{ maxWidth: string }>(
  ({ maxWidth }) => ({
    maxWidth,
    marginLeft: 'auto',
    marginRight: 'auto'
  })
)

export default MaxWidthLayout
