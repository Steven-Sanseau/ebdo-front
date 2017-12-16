import { injectGlobal } from 'styled-components'

// these sizes are arbitrary and you can set them to whatever you wish
const sizes = {
  giant: 1200,
  desktop: 1024,
  tablet: 768,
  phone: 376
}
/* eslint no-unused-expressions: 0 */
injectGlobal`

@font-face {
    font-family: 'FG-R';
    font-style: normal;
    font-weight: 400;
    src: url('./FoundersGroteskWeb-Regular.woff') format('woff');
  }
  @font-face {
    font-family: "FG-R";
    font-style: normal;
    font-weight: 500;
    src: url('./FoundersGroteskWeb-Medium.woff') format('woff');
  }
  @font-face {
    font-family: "FG-R";
    font-style: normal;
    font-weight: 700;
    src: url('./FoundersGroteskWeb-Bold.woff') format('woff');
  }


  html,
  body {
    height: 100%;
    width: 100%;
    font-family: 'FG-R';
    line-height: 26px;
    /* letter-spacing: 0.5px; */
  }

  h1, h2, h3, h4, h5 {
    margin: 0;
  }

  a:hover {
    color: inherit;
  }

  * {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  /* To round the right part of the Progress Component */
  .progress-line svg path:last-of-type{
    stroke-linecap: round;
  }
    :root {
      --warm-grey: #979797;
      --greyish-brown: #4a4a4a;
      --white: #dad7d7;
      --french-blue: #3e50b4;
      --grey-blue: #658089;
      --sunflower: #fecc0e;
      --booger: #a9c841;
      --warm-purple: #9d358a;
      --tomato: #e52d28;
      --topaz: #15aaa9;
      --squash: #f39625;
      --turquoise-blue: #00a4d8;
      --peacock-blue: #006397;
      --darkish-pink: #e7317c;
      --bruise: #7f3b73;
      --cool-grey: #afbcc1;
      --silver: #d4dadd;
      --pale-grey: #e8eef1;
      --background: #fafafa;
      --black: #000000;
      --white-true: #ffffff;
    }
`

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})
