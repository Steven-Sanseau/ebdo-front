import styled from 'styled-components'

const InputWrapper = styled.div`
  margin-top: 15px;
  border: 1px solid;
  border-color: var(${props => (props.checked ? '--booger' : '--silver')});
  padding: 13px 15px;
  border-radius: 6px;
  font-size: 16px;
`

export default InputWrapper
