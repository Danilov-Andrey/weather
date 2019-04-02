import { combineReducers } from 'redux';
import { currentCity, currentForecasts } from './cities';

export default combineReducers({
  city: currentCity,
  forecasts: currentForecasts,
});
