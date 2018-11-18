import {FETCH_MOVIES} from "../actions/fetch_movies";

export default function (state = [], action) {
    switch(action.type) {
        case FETCH_MOVIES:
            return [action.payload.data, ...state]; // Return a new version of state (include both old and new data)
    }
    return state;
}