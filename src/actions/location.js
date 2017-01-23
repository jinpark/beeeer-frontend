import 'whatwg-fetch'

export const REQUEST_PLACES = 'REQUEST_PLACES'
export const RECEIVE_PLACES = 'RECEIVE_PLACES'

function receivePlaces(json) {
  return {
    type: RECEIVE_PLACES,
    places: json,
    receivedAt: Date.now()
  }
}

function requestPlaces() {
  return {
    type: REQUEST_PLACES
  }
}

export function fetchPlaces() {
  return dispatch => {
    dispatch(requestPlaces())
    return fetch('http://beeeer.herokuapp.com/all/')
      .then(response => response.json())
      .then(json => dispatch(receivePlaces(json)))
  }
}
