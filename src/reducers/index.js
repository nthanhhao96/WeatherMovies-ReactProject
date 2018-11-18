import {combineReducers} from 'redux';
import WeatherReducer from './reducer_weather';
import MoviesReducer from './reducer_movies';

const rootReducer = combineReducers({
    weather: WeatherReducer,
    movies: MoviesReducer
});

export default rootReducer;
