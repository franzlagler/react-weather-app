/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
import axios from 'axios';
import { useState } from 'react';
import Button from './Button';
import Heading from './Heading';
import Input from './Input';

const globalStyle = css`
  * {
    box-sizing: border-box;
  }
  body {
    padding: 30px;
    background-color: #ffba08;
  }
`;

const mainContainer = css`
  display: grid;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border: 1px solid black;
`;

function App() {
  const [userInput, setUserInput] = useState('');

  async function fetchWeatherData() {
    axios
      .get(
        'https://api.openweathermap.org/data/2.5/weather?q=Vienna&appid=NO API',
      )
      .then((res) => {
        console.log(res.data);
      });
  }

  fetchWeatherData();

  const handleInputChange = ({ currentTarget }) => {
    setUserInput(currentTarget.value);
  };

  const handleSubmitClick = () => {};

  return (
    <>
      <Global styles={globalStyle} />
      <div css={mainContainer}>
        <Heading />
        <Input handleInputChange={handleInputChange} value={userInput} />
        <Button handleSubmitClick={handleSubmitClick} />
      </div>
    </>
  );
}

export default App;
