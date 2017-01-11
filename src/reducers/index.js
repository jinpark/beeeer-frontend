const defaultState = {lat: 37.4978602, lng: 127.0253183};

const latlng = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_LATLNG':
      return {
        latlng: {
            lat: action.lat,
            lng: action.lng
        }
      }
    default:
      return state
  }
}

export default latlng
