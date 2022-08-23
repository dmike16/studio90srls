import { css, CSSResultGroup } from "lit";

export function darkTheme(): CSSResultGroup {
  return css`
    swc-header,
    main {
      --mdc-theme-primary: #80cbc4;
      --mdc-theme-secondary: #a5d6a7;
      --mdc-theme-surface: #121212;
      --mdc-theme-background: #121212;
      --mdc-theme-on-primary: #000000;
      --mdc-theme-on-secondary: #000000;
      --mdc-theme-on-surface: #ffffff;
      --mdc-typography-font-family: "Sans", sans-serif;
      --mdc-typography-body1-font-size: 1.2rem;
      --mdc-typography-headline1-font-size: 3.2rem;
      --mdc-typography-headline1-font-weight: 300;
      --mdc-typography-headline4-font-size: 1.63rem;
      --mdc-typography-headline4-font-weight: 300;
      --mdc-typography-headline5-font-size: 1.34rem;
      --mdc-typography-headline5-font-weight: 300;
    }
  `;
}