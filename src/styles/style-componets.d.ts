/* eslint-disable @typescript-eslint/no-empty-interface */
import "styled-components";
import ligth from "./themes/ligth";

type Theme = typeof theme;
declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    title: string;

    colors: {
      primary: string;
      secodary: string;
      background: string;
      text: string;
    };
  }
}
