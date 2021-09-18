/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { createGlobalStyle } from 'styled-components';
import Button from '../Components/Button';
import Heading from '../Components/Heading';
import Input from '../Components/Input';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300&display=swap');
*,*::before,*::after{
  font-family: 'Poppins', sans-serif;
}
 body {

   background-color: #ffd500;

 }
`;

const mainContainer = css`
  display: grid;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 15px;
`;

function Home(props) {
  const weatherData = props.weatherData;
  console.log(weatherData);

  return (
    <>
      <GlobalStyle dayTime={weatherData.dayTime} />
      <div css={mainContainer}>
        <Heading fontSize="30px" />
        <Input handleInputChange={props.handleInputChange} city={props.city} />
        <Button onClick={props.handleSubmitClick}>Submit</Button>
      </div>
    </>
  );
}

export default Home;
