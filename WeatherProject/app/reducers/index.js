import {combineReducers} from 'redux';
import {getCitiesData} from './citiReducer';
import {getForecastData} from './forecastReducer';

const rootReducers = combineReducers({
  listCities: getCitiesData,
  forecast: getForecastData
});
export default rootReducers;