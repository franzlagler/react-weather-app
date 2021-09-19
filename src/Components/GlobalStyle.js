import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,*::before,*::after{
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;
}
 body {
padding: 30px;
   background-color: ${(props) =>
     props.dayTime === 'night' ? '#272640 ' : '#ffd500'};

 }
`;

export default GlobalStyle;
