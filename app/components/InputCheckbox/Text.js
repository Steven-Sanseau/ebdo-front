import styled from 'styled-components'

const Text = styled.div`
  color: var(
    ${props => {
      if (props.checked) {
        return '--black'
      } else if (props.isHover) {
        return '--black'
      }
      return '--silver'
    }}
  );
  font-family: 'FG-R';
  line-height: 16px;
  margin-left: 30px;
`

export default Text
