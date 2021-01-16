import styled from '@emotion/styled'

const PageLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  & > * {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  & > *:not(:last-child) {
    border-bottom: 1px solid; //todo: set border color
  }

  & > main {
    flex-grow: 1;
  }
`

export default PageLayout
