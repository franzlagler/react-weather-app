import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Home from './Pages/Home';
import WeatherPreview from './Pages/WeatherPreview';

function App() {
  // State Variables
  const [cityInput, setCityInput] = useState('');
  const [unit, setUnit] = useState(() => {
    return localStorage.getItem('unit') || '';
  });
  const [weatherData, setWeatherData] = useState(() => {
    return JSON.parse(localStorage.getItem('weatherObject')) || '';
  });
  const [coordinates, setCoordinates] = useState([]);

  const firstUpdate = useRef(true);

  const history = useHistory();

  const checkDayTime = (input) => {
    if (input.match(/d/)) {
      return 'day';
    }

    return 'night';
  };

  const handleCityInputChange = ({ currentTarget }) => {
    setCityInput(currentTarget.value);
  };

  const handleUnitChange = ({ currentTarget }) => {
    const selectedUnit = currentTarget.id;
    let tempUnit;
    if (selectedUnit === 'celsius') {
      tempUnit = 'metric';
    } else {
      tempUnit = 'imperial';
    }
    setUnit(tempUnit);
    localStorage.setItem('unit', tempUnit);
  };
  // Fetch Weather Data
  async function handleSubmitClick() {
    try {
      const rawData = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=${unit}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
      );
      const { data } = rawData;

      const weatherObject = {};
      weatherObject.city = data.name;
      weatherObject.temp = Math.round(data.main.temp);

      // Capitalize the first letter of each word
      let weatherDescription = data.weather[0].description;
      weatherDescription = weatherDescription.split(' ');
      weatherDescription = weatherDescription.map(
        (el) => el[0].toUpperCase() + el.slice(1, el.length),
      );
      weatherDescription = weatherDescription.join(' ');
      weatherObject.description = weatherDescription;

      weatherObject.icon = data.weather[0].icon;
      weatherObject.dayTime = checkDayTime(weatherObject.icon);
      setWeatherData(weatherObject);
      localStorage.setItem('weatherObject', JSON.stringify(weatherObject));

      history.push('/weatherdata');
    } catch {
      console.log('Error');
      setCityInput('Invalid Input');
      setTimeout(() => setCityInput(''), 1000);
    }
  }

  const handleBackClick = () => {
    history.push('/');
  };

  // Resetting Tex Field when weather data update
  useEffect(() => {
    setCityInput('');
  }, [weatherData]);

  // Get Coordinates
  async function handleGetLocation() {
    setCityInput('Loading...');
    try {
      let latitude, longitude;
      await navigator.geolocation.getCurrentPosition(({ coords }) => {
        latitude = coords.latitude;
        longitude = coords.longitude;
        setCoordinates([latitude, longitude]);
      });
    } catch {
      setCityInput('Error');
    }
  }
  // Get City Name from Cooridnates
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
    } else {
      axios
        .get(
          `https://www.mapquestapi.com/geocoding/v1/reverse?key=${process.env.REACT_APP_MAP_API_KEY}&location=${coordinates[0]},${coordinates[1]}`,
        )
        .then((rawData) => {
          setCityInput(rawData.data.results[0].locations[0].adminArea5);
        });
    }
  }, [coordinates]);

  return (
    <Switch>
      <Route exact path="/">
        <Home
          city={cityInput}
          handleCityInputChange={handleCityInputChange}
          handleUnitChange={handleUnitChange}
          handleSubmitClick={handleSubmitClick}
          handleGetLocation={handleGetLocation}
          weatherData={weatherData}
        />
      </Route>
      <Route path="/weatherdata" component={WeatherPreview}>
        <WeatherPreview
          weatherData={weatherData}
          unit={unit}
          handleBackClick={handleBackClick}
        />
      </Route>
    </Switch>
  );
}

export default App;
