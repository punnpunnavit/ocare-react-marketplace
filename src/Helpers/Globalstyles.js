import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Poppins:100,400,700');


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
    font-family: Poppins, sans-serif;
    background-color: #FFFFFF;
    
  }

  body {
    margin: 0;
    padding: 0;
    
    h1 {
      font-size: 2rem;
      font-weight: 600;
      color: black;
    }

    h3 {
      font-size: 1.1rem;
      font-weight: 600;
    }

    p {
      font-size: 1rem;
      color: black;
    }

   
  }
`;
