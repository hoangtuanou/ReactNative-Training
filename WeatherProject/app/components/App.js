import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from './../actions/FetchData';
import WeatherProject from './WeatherProject';

const mapStateToProps = (state) => {
  return {
    listCities: state.listCities,
    forecast: state.forecast
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators,dispatch);
}

const App = connect(mapStateToProps,mapDispatchToProps)(WeatherProject);
export default App;
