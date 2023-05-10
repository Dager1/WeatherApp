import { data } from "autoprefixer";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return axios
    .get(url)
    .then((res) => res.data)
    .catch((error) => {
      console.error("An error occurred while fetching weather data:", error);
      throw error;
    });
};

const formattedCurrentWeather = (data) => {
  const {
    coord: { lon, lat },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lon,
    lat,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};

const getFormattedWeatherData = async ({ searchParams }) => {
  const formattedWeather = await getWeatherData("weather", searchParams).then(
    formattedCurrentWeather
  );
  return formattedWeather;
};

export default getFormattedWeatherData;
