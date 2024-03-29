import { css } from 'styled-components'

const buttonStyles = css`
  display: inline-block;
  box-sizing: border-box;
  border: ${props => (props.border ? '1px solid var(--silver)' : 'none')};
  color: var(${props => (props.colorText ? props.colorText : '--white-true')});
  font-family: 'FG-R';
  font-size: 16px;
  text-decoration: none;
  border-radius: 16px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  white-space: nowrap;
  min-width: ${props => props.minWidth};
  background-color: var(${props => (props.color ? props.color : '--booger')});
  padding: 0 20px;
  line-height: 40px;
  transition: transform 0.15s ease-out, -webkit-transform 0.15s ease-out;

  &.big {
    height: 45px;
    line-height: 45px;
    border-radius: 18px;
    font-size: 18px;
  }

  &:active {
    background-color: var(${props => (props.color ? props.color : '--booger')});
    color: var(
      ${props => (props.colorText ? props.colorText : '--white-true')}
    );
  }
  &:hover {
    transform: scale(1.05);
  }
`

export default buttonStyles
