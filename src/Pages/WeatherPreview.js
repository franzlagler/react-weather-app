/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
import styled from 'styled-components';
import weatherReporter from '../../public/weather-reporter.svg';
import Button from '../Components/Button';
import MainContainer from '../Components/MainContainer';

const WeatherPreviewContainer = styled.div`
  position: relative;
  display: grid;
  justify-content: center;
  margin: 20px auto;
  padding: 60px 50px;
  border: 3px solid #212529;
  border-radius: 15px;
  text-align: center;
`;

const weatherPreviewHeading = css`
  margin: 30px auto 50px auto;
  font-size: 60px;
  font-weight: normal;
`;

const city = css`
  margin: 10px auto 0 auto;
  font-size: 35px;
  font-weight: normal;
`;

const temperatureContainer = css`
  display: flex;
  justify-content: center;
  align-content: center;
`;

const temperature = css`
  margin: 0;
  font-size: 100px;
`;

const unitTextStyling = css`
  margin-top: 15px;
  margin-left: 5px;
  font-size: 35px;
`;

const description = css`
  margin: 20px auto 0 auto;
  font-size: 20px;
`;

const weatherReporterImage = css`
  position: absolute;
  top: -40px;
  left: -40px;
  width: 100px;
`;

function WeatherPreview(props) {
  const weatherData = props.weatherData;

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
        <h2 css={weatherPreviewHeading}>Weather Forecast</h2>
        <WeatherPreviewContainer dayTime={props.weatherData.dayTime}>
          <img
            src={weatherReporter}
            alt="Weather Report"
            css={weatherReporterImage}
          />
          <div css={temperatureContainer}>
            <p css={temperature}>{weatherData.temp}</p>
            <p css={unitTextStyling}>{props.unit === 'metric' ? '°C' : '°F'}</p>
          </div>
          <p css={city}>{weatherData.city}</p>

          <p css={description}>{weatherData.description}</p>
        </WeatherPreviewContainer>

        <Button onClick={props.handleBackClick}>← Back</Button>
      </MainContainer>
    </>
  );
}

export default WeatherPreview;
