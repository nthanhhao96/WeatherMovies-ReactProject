import axios from 'axios';

const ROOT_URL = `https://www.finnkino.fi/xml/Schedule/`;

export const FETCH_MOVIES = 'FETCH_MOVIES';

export function fetchMovies(city) {
    let cityID;
    //const city = cityName.toLowerCase(); // Set city name to lower case letters
    if (city === 'Helsinki') {
        cityID = 1002;
    } else if (city ==='Espoo') {
        cityID = 1012;
    } else if (city ==='Vantaa') {
        cityID = 1013;
    } else if (city ==='Jyväskylä') {
        cityID = 1015;
    } else if (city ==='Kuopio') {
        cityID = 1016;
    } else if (city ==='Lahti') {
        cityID = 1017;
    } else if (city ==='Lappeenranta') {
        cityID = 1041;
    } else if (city ==='Oulu') {
        cityID = 1018;
    } else {
        cityID = 1029;
    }
    const url = `${ROOT_URL}?area=${cityID}`;
    const request = axios.get(url);

    return {
        type: FETCH_MOVIES,
        payload: request
    };
}