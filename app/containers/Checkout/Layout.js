import styled from 'styled-components'
import { media } from 'global-styles'

const Layout = styled.div`
  margin-left: auto;
  margin-right: auto;

  background: var(--background);

  ${media.tablet`
    padding: 40px 0;
  `};
`

export default Layout
