import getTime from './../getTime';
export const RECEIVE_CITIES = 'RECEIVE_CITIES';
export const RECEIVE_FORECAST = 'RECEIVE_FORECAST';

export const fetchCities = (text) => {
  return (dispatch) => {
    fetch(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=zOEDguz3RM6DRGh1o9UIm7dCyU4qIlKU&q=${text}&language=es`)
      .then((res)=>res.json())
      .then((resJSON)=>{
        dispatch(receiveCities(resJSON));
      })
  }
}

export const fetchForecast = (cityID, navigator) => {
  const APIKEY = 'FWaugDBcsPGXNdH0fTZGKuiYfoN928aG';
  console.log('fetching...');
  return (dispatch) => {
    fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityID}?apikey=${APIKEY}&details=true&metric=true`)
      .then((res) => res.json())
      .then((resJSON) => {
        getTime(dispatch, resJSON.DailyForecasts);
        navigator.push({name:'home'});
      });
  }
}
export const receiveCities = (cities) => {
  return {
    type: RECEIVE_CITIES,
    payload: cities
  }
}

export const receiveForecast = (forecast) => {
  return {
    type: RECEIVE_FORECAST,
    payload: forecast
  }
}