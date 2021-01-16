import styled from '@emotion/styled'

const PageLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  & > * {
    padding-top: 20px;
    padding-bottom: 20px;

    &:not(:last-child) {
      border-bottom: 1px solid; //todo: set border color
    }
  }

  & > main {
    flex-grow: 1;
  }
`

export default PageLayout
