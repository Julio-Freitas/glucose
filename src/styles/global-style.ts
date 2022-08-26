import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`


*{
  margin:0;
  padding:0;
  outline:none;
  box-sizing: border-box;
}
  html{
    font-size: 62.5%
  }
  body{
    height: 100%;
    font-family: "Overpass", sans-serif;
    font-size: ${({ theme }) => theme.font.sizes.medium};
  }
`;