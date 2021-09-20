/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
import Button from '../Components/Button';
import HeadingContainer from '../Components/HeadingContainer';
import InputContainer from '../Components/InputContainer';
import MainContainer from '../Components/MainContainer';
import SelectionField from '../Components/SelectionField';
import TextField from '../Components/TextField';

function Home(props) {
  const weatherData = props.weatherData;

  // Global Style
  const globalStyle = css`
    *,
    *::before,
    *::after {
      font-family: 'Inter', sans-serif;
      box-sizing: border-box;
    }
    body {
      padding: 30px;
      background-color: ${weatherData.dayTime === 'night'
        ? '#272640 '
        : '#ffd500'};
    }
  `;
  return (
    <>
      <Global styles={globalStyle} />

      <MainContainer>
        <HeadingContainer />
        <InputContainer>
          <TextField
            handleCityInputChange={props.handleCityInputChange}
            city={props.city}
            id="cityInput"
          />
          <Button onClick={props.handleGetLocation} link>
            Get Location
          </Button>
          <SelectionField handleUnitChange={props.handleUnitChange} />
          <Button onClick={props.handleSubmitClick}>Submit</Button>
        </InputContainer>
      </MainContainer>
    </>
  );
}

export default Home;
