import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';
import WeatherDetail from './containers/weather_detail';
import MoviesDetail from './containers/movies_detail';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <Switch>
                <Route path="/weather/:id/:name" component={WeatherDetail} />
                <Route path="/movies/:name" component={MoviesDetail} />
                <Route path="/" component={App} />
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.container'));
