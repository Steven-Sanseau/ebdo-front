import styled from 'styled-components'

const BulletCheck = styled.div`
  background-color: : var(${props =>
    props.checked ? '--booger' : '--white-true'});
  border-radius: 50%;
  width: 8px;
  height: 8px;
`

export default BulletCheck
