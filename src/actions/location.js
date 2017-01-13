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
    return fetch('https://gist.githubusercontent.com/jinpark/32647850029d64b6e88f152f7293b664/raw/c99a0a22c4520afda8269289e99378db9c0eb27f/places.json')
      .then(response => response.json())
      .then(json => dispatch(receivePlaces(json)))
  }
}
