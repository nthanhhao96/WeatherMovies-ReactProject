import axios from 'axios';

const API_KEY = 'edafef7360e85c10e835ac89cb7f4058';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},fi`;
    const request = axios.get(url)
        .catch(error => {
        alert('Oops... something went wrong. Please type in a correct city name! \n \n'+ error);
        window.location.reload();
    }); // Error handling if there are any wrong with the data

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}