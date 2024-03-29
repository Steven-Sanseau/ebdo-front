import styled from 'styled-components'

const InputWrapper = styled.div`
  margin-top: 15px;
  border: 1px solid;
  border-color: var(
    ${props => {
      if (props.checked) {
        return '--booger'
      } else if (props.isHover) {
        return '--black'
      }
      return '--silver'
    }}
  );
  padding: 13px 15px;
  border-radius: 6px;
  font-size: 16px;
  position: relative;
  cursor: pointer;
`

export default InputWrapper
