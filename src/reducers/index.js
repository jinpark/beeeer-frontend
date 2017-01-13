import { combineReducers } from 'redux'

const defaultLocationState = {lat: 37.4978602, lng: 127.0253183};

const latlng = (state = defaultLocationState, action) => {
  switch (action.type) {
    case 'SET_LATLNG':
      return { ...state, lat: action.lat, lng: action.lng }
    default:
      return state
  }
}

const places = (state = {isFetching: false, places: []}, action) => {
    switch (action.type) {
      case 'REQUEST_PLACES':
        return { ...state, isFetching: true }
      case 'RECEIVE_PLACES':
        return { ...state, 
          isFetching: false,
          places: action.places,
          lastUpdated: action.receivedAt
        }
      default:
        return state
    }
}

const rootReducer = combineReducers({
  latlng,
  places
})

export default rootReducer
