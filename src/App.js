/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import axios from 'axios';
import { useState } from 'react';
import Heading from './Heading';
import Input from './Input';

const mainContainer = css`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
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

  return (
    <div css={mainContainer}>
      <Heading />
      <Input handleInputChange={handleInputChange} value={userInput} />
    </div>
  );
}

export default App;
