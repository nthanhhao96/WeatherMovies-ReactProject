import {FETCH_WEATHER} from "../actions/fetch_weather";

export default function (state = [], action) {
    switch(action.type) {
        case FETCH_WEATHER:
            return [...state, action.payload.data]; // Return a new version of state (include both old and new data)
    }
    return state;
}