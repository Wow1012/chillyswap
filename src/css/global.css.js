import { createGlobalStyle } from 'styled-components'


const GlobalCSS =  createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    // background-color: #443205;
  }

  @font-face {
    font-family: "BadaBoom";
    src: url("/fonts/BadaBoom/BadaboomBB_Reg.ttf") format("truetype");
  }

  
  @font-face {
    font-family: "Alata";
    src: url("/fonts/Alata/Alata-Regular.ttf") format("truetype");
  }

  @font-face {
    font-family: "GiloryRegular";
    src: url("/fonts/Gilroy/Gilroy-Regular.ttf") format("truetype");
  }

  @font-face {
    font-family: "GilroyBold";
    src: url("/fonts/Gilroy/Gilroy-Black.ttf") format("truetype");
  }

  @font-face {
    font-family: "GilroyLight";
    src: url("/fonts/Gilroy/Gilroy-Light.ttf") format("truetype");
  }  
  
  @font-face {
    font-family: "GilroyMedium";
    src: url("/fonts/Gilroy/Gilroy-Medium.ttf") format("truetype");
  }
  
  @font-face {
    font-family: "GilroySemiBold";
    src: url("/fonts/Gilroy/Gilroy-SemiBold.ttf") format("truetype");
  }

  
  /* * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  } */
`

export default GlobalCSS;