import styled from 'styled-components'
import { media } from 'global-styles'

const Layout = styled.div`
  margin-left: auto;
  margin-right: auto;

  background: var(--background);
  padding-bottom: 10%;

  ${media.tablet`
    padding: 20% 0;
  `};
`

export default Layout
