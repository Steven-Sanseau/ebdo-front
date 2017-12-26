import { css } from 'styled-components'

const buttonStyles = css`
  display: inline-block;
  box-sizing: border-box;
  border: ${props => (props.border ? '1px solid var(--silver)' : 'none')};
  color: var(${props => (props.colorText ? props.colorText : '--white-true')});
  font-family: 'FG-R';
  font-size: 16px;
  line-height: 16px;
  text-decoration: none;
  border-radius: 16px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  min-width: ${props => props.minWidth};
  background-color: var(${props => (props.color ? props.color : '--booger')});
  padding: 10px 20px;

  &:active {
    background-color: var(${props => (props.color ? props.color : '--booger')});
    color: var(
      ${props => (props.colorText ? props.colorText : '--white-true')}
    );
  }
`

export default buttonStyles
