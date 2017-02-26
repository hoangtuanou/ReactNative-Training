import {RECEIVE_FORECAST} from './../actions/FetchData';

export const getForecastData = (state=[], action) => {
  switch(action.type){
    case RECEIVE_FORECAST:
      return state.concat(action.payload);
    default: 
      return state;
  }
}
