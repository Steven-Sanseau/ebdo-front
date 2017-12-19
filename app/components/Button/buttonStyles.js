import { css } from 'styled-components'

const buttonStyles = css`
  display: inline-block;
  box-sizing: border-box;
  border: none;
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
  color: #fff;
  background-color: var(
    ${props => {
      if (props.color === 'green') {
        return '--booger'
      } else if (props.color === 'orange') {
        return '--squash'
      } else if (props.color === 'blue') {
        return '--turquoise-blue'
      }

      return '--silver'
    }}
  );
  padding: 10px 20px;

  &:active {
    background-color: var(
      ${props => {
        if (props.color === 'green') {
          return '--booger'
        } else if (props.color === 'orange') {
          return '--squash'
        } else if (props.color === 'blue') {
          return '--turquoise-blue'
        }

        return '--silver'
      }}
    );
    color: #fff;
  }
`

export default buttonStyles
