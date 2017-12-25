import styled from 'styled-components'

const Icon = styled.div`
  font-family: 'Lucida-grande';
  color: var(--silver);
  font-size: 14px;
  line-height: 12px;
  text-align: center;
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: var(
    ${props => (props.color === '--booger' ? '--booger' : '--background')}
  );
  top: 5px;
  left: 5px;
  padding: 5px;
  border-radius: 5px;
`

export default Icon
