import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 16px;

    @media (min-width: 768px) and (max-width: 1439.8px) {
      font-size: calc((1280 / 1440) * 16px);
    }
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'DM Mono', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    background: rgb(254, 250, 255);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    font-family: 'DM Mono', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }

  section {
    max-width: initial;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: Khand, Inter, Helvetica, Arial, Verdana, Tahoma, sans-serif;
  }

  .sr-only {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    clip-path: inset(50%) !important;
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;
  }

  .text-center {
    text-align: center;
  }

  .desktop-only {
    display: none;
  }

  .mobile-only {
    display: block;
  }

  @media (min-width: 768px) {
    .desktop-only {
      display: block;
    }

    .mobile-only {
      display: none;
    }
  }
`;

export default GlobalStyles;
