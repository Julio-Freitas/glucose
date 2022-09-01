import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`


*{
  margin:0;
  padding:0;
  outline:none;
  box-sizing: border-box;
}
  html{
    font-size: 84.5%
  }
  body{
    height: 100%;
    font-family: "Overpass", sans-serif;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
  }
`;
