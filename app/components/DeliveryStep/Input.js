import styled from 'styled-components';

const Input = styled.input`
  font-family: 'FG-R';
  height: 40px;
  background-color: #ffffff;
  border: solid 0.5px var(--cool-grey);
  font-size: 16px;
  line-height: 40px;
  text-align: left;
  color: var(--cool-grey);
  padding: 12px 14px;
  margin-top: 4px;
  width: 100%;

  &:focus {
    outline-width: 0;
  }
`;

export default Input;
