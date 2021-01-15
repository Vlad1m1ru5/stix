import styled from '@emotion/styled'

const PageLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  & > main {
    flex-grow: 1;
  }
`

export default PageLayout
