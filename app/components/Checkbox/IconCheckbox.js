import styled from 'styled-components'

const IconCheckbox = styled.div`
  border: 1px solid;
  border-color: var(${props => (props.checked ? '--booger' : '--silver')});
  background-color: var(
    ${props => (props.checked ? '--booger' : '--white-true')}
  );
  font-family: 'Lucida-grande';
  color: #fff;
  font-size: 14px;
  line-height: 11px;
  text-align: center;
  width: 20px;
  height: 20px;
  padding: 4px;
  border-radius: 8px;
  display: inline-block;
  margin-right: 5px;
`

export default IconCheckbox
