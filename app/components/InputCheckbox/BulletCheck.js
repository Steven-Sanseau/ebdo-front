import styled from 'styled-components'

const BulletCheck = styled.div`
  background-color: var(
    ${props => (props.checked ? '--booger' : '--white-true')}
  );
  border-radius: 50%;
  left: 3px;
  top: 3px;
  width: 12px;
  height: 12px;
  position: absolute;
`

export default BulletCheck
