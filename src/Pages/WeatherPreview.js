/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled, { createGlobalStyle } from 'styled-components';
import Button from '../Components/Button';

const GlobalStyle = createGlobalStyle`
 body {

background-color: ${(props) =>
  props.dayTime === 'day' ? '#ffd500' : '#212529'};
 }
`;

const MainContainer = styled.div`
  display: grid;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 15px;
`;

const heading = css`
  font-size: 50px;
  font-weight: normal;
  letter-spacing: 3px;
`;

const WeatherPreviewContainer = styled.div`
  display: grid;
  justify-content: center;
  margin: 20px auto;
  padding: 20px;
  border: 3px solid black;
  border-radius: 5px;
  text-align: center;
`;

const city = css`
  margin: 20px;
  font-size: 30px;
  font-weight: normal;
`;

const temperature = css`
  font-size: 60px;
  margin: 20px;
`;

const description = css`
  font-size: 20px;
`;

const weatherIcon = css`
  margin: 20px auto;
  width: 100px;
`;

function WeatherPreview(props) {
  const weatherData = props.weatherData;

  return (
    <>
      <GlobalStyle dayTime={weatherData.dayTime} />
      <MainContainer>
        <h1 css={heading}>Weather Preview</h1>
        <WeatherPreviewContainer>
          <h1 css={city}>{weatherData.city}</h1>
          <p css={temperature}>{weatherData.temp}</p>
          <p css={description}>{weatherData.description}</p>
        </WeatherPreviewContainer>

        <Button onClick={props.handleBackClick}>Back</Button>
      </MainContainer>
    </>
  );
}

export default WeatherPreview;
