import styled from 'styled-components'

const Square = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  background-color: var(
    ${props =>
      props.color === 'green'
        ? '--booger'
        : props.color === 'silver' ? '--silver' : '--black'}
  );
  position: relative;
  margin-top: 17px;
`

export default Square
