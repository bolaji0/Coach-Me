import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
    margin: 0;
    box-sizing: border-box;
}

body {
    background: rgba(26, 25, 25, 0.9);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(2.8px);
-webkit-backdrop-filter: blur(2.8px);
border: 1px solid rgba(26, 25, 25, 0.23);
     color: ${(theme) => theme.text};
     font-family: 'Roboto', sans-serif;
      letter-spacing: .6px;
}
`;
