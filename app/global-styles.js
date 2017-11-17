import { injectGlobal } from 'styled-components'

/* eslint no-unused-expressions: 0 */
injectGlobal`

    @font-face {
       font-family: 'FG-B';
       src: url('./FoundersGrotesk-Bold.otf') format('opentype');
    }
    @font-face {
       font-family: 'FG-R';
       src: url('./FoundersGrotesk-Regular.otf') format('opentype');
    }

    html,
    body {
      font-size: 200%;
      height: 100%;
      width: 100%;
      font-family: 'FG-R';
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
