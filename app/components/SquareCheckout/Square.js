import styled from 'styled-components'

const Square = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 13px;
  background-color: var(
    ${props => {
      if (props.color === 'green') {
        return '--booger'
      } else if (props.color === 'silver') {
        return '--silver'
      }

      return '--white-true'
    }}
  );

  position: relative;
  margin-top: 17px;
`

export default Square
