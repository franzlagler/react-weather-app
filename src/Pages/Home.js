import Button from '../Components/Button';
import GlobalStyle from '../Components/GlobalStyle';
import HeadingContainer from '../Components/HeadingContainer';
import InputContainer from '../Components/InputContainer';
import MainContainer from '../Components/MainContainer';
import SelectionField from '../Components/SelectionField';
import TextField from '../Components/TextField';

function Home(props) {
  return (
    <>
      <GlobalStyle />

      <MainContainer>
        <HeadingContainer />
        <InputContainer>
          <TextField
            handleInputChange={props.handleInputChange}
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
