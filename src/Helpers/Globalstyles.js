import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


  :root {
    --maxWidth: 1280px;
    --white: #fff;
    --lightgreen: #98D09E;
    --green: #3FBDA7;
    --blue: #3C7ABE;
    --purple: #534683;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
   
  }

  * {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    /* background-color: #FFFFFF;
     */
  }

  body {
    margin: 0;
    padding: 0;
    
    h1 {
      font-size: 2rem;
      font-weight: 700;
      color: black;
    }

    h2{
      font-size: 1.75rem;
      font-weight: 700;
      color: black;
    }

    h3 {
      font-size: 1.5rem;
      font-weight: 500;
    }

    p {
      font-size: 1rem;
      font-weight: 100;
      color: black;
    }

   
  }
`;
