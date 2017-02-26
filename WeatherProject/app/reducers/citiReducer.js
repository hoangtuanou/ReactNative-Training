import {RECEIVE_CITIES} from './../actions/FetchData';

export const getCitiesData = (state=[], action) => {
  state.length = 0;
  switch(action.type){
    case RECEIVE_CITIES:
      return state.concat(action.payload);
    default:
      return state;
  }
}
