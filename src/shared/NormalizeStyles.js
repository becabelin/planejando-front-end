import {createGlobalStyle} from 'styled-components';
import {Spaces, Colors} from './DesignTokens';

export const NormalizeStyles = createGlobalStyle`
   * {
    margin:${Spaces.NONE};
    padding:${Spaces.NONE};
    outline:${Spaces.NONE};
    box-sizing: border-box;
  }

  body{
    background: ${Colors.BACKGROUND};
  }

  button{
    cursor:pointer;
  }

`;
