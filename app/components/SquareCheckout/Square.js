import styled from 'styled-components';

const Square = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  background-color: ${props => (props.type === 'green' ? '#a9c841' : '#000')};
  position: relative;
  margin-top: 17px;
`;

export default Square;
