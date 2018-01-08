import styled from 'styled-components'

const Input = styled.input`
  font-family: 'FG-R';
  background-color: var(--white-true);
  border: solid 1px;
  border-radius: 6px;
  border-color: var(${props => (props.error ? '--tomato' : '--cool-grey')});
  font-size: 16px;
  line-height: 40px;
  text-align: left;
  color: var(${props => (props.error ? '--tomato' : '--black')});
  padding: 0 14px;
  margin-top: 4px;
  width: 100%;

  &:focus {
    outline-width: 0;
  }
  &::placeholder {
    color: var(--cool-grey);
  }
  &:not(:placeholder-shown) {
    border: 1px solid var(--black);
  }
  &:hover,
  &:focus {
    border: 1px solid var(--black);
  }
  &.errored {
    border: 1px solid var(--tomato);
  }
  &.validated {
    border: 1px solid var(--booger);
  }
`

export default Input
