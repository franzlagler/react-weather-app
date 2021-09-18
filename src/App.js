import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Home from './Pages/Home';
import WeatherPreview from './Pages/WeatherPreview';

require('dotenv').config();

function App() {
  const [userInput, setUserInput] = useState('');
  const [weatherData, setWeatherData] = useState('');

  const history = useHistory();

  const checkDayTime = (input) => {
    if (input.match(/d/)) {
      return 'day';
    }

    return 'night';
  };

  const handleInputChange = ({ currentTarget }) => {
    setUserInput(currentTarget.value);
  };

  async function handleSubmitClick(e) {
    try {
      const rawData = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=metric&appid=${process.env.REACT_APP_API_KEY}`,
      );
      const { data } = rawData;

      const weatherObject = {};
      weatherObject.city = data.name;
      weatherObject.temp = `${data.main.temp}°C`;

      // Capitalize the first letter of each word
      let weatherDescription = data.weather[0].description;
      weatherDescription = weatherDescription.split(' ');
      weatherDescription = weatherDescription.map(
        (el) => el[0].toUpperCase() + el.substring(1, el.length),
      );
      weatherDescription = weatherDescription.join(' ');
      weatherObject.description = weatherDescription;

      weatherObject.icon = data.weather[0].icon;
      weatherObject.iconUrl = `http://openweathermap.org/img/wn/${weatherObject.icon}@2x.png`;
      weatherObject.dayTime = checkDayTime(weatherObject.icon);
      setWeatherData(weatherObject);
      history.push('/weatherdata');
    } catch {
      console.log('Error');
      setUserInput('Invalid');
      setTimeout(() => setUserInput(''), 1000);
    }
  }

  const handleBackClick = () => {
    history.push('/');
  };

  return (
    <Switch>
      <Route exact path="/">
        <Home
          city={userInput}
          handleInputChange={handleInputChange}
          handleSubmitClick={handleSubmitClick}
          weatherData={weatherData}
        />
      </Route>
      <Route path="/weatherdata" component={WeatherPreview}>
        <WeatherPreview
          weatherData={weatherData}
          handleBackClick={handleBackClick}
        />
      </Route>
    </Switch>
  );
}

export default App;
