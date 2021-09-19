/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import sun from '../../public/sun.svg';
import Button from '../Components/Button';
import GlobalStyle from '../Components/GlobalStyle';
import HeadingContainer from '../Components/HeadingContainer';
import InputContainer from '../Components/InputContainer';
import MainContainer from '../Components/MainContainer';
import SelectionField from '../Components/SelectionField';
import TextField from '../Components/TextField';

const image = css`
  width: 100px;
  display: flex;
  margin: 10px auto;
`;

function Home(props) {
  const weatherData = props.weatherData;
  console.log(weatherData);

  return (
    <>
      <GlobalStyle />

      <MainContainer>
        <HeadingContainer />
        <InputContainer>
          <TextField
            handleInputChange={props.handleInputChange}
            city={props.city}
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
