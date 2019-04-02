import request from '../api';
import {
  ADD_CITY,
  CURRENT_CITY,
  ADD_FIVE_FORECASTS,
  DELETE_CURRENT_MAIN_FORECAST,
  DELETE_FIVE_FORECASTS,
} from '../type';

export const getForecast = term => async dispatch => {
  const response = await request.getData(term);
  dispatch({ type: ADD_CITY, payload: response });
};

export const getCurrentCity = (lat, lon) => async dispatch => {
  const response = await request.getCurrentWeather(lat, lon);
  dispatch({ type: CURRENT_CITY, payload: response });
};

export const fiveForecasts = id => async dispatch => {
  const response = await request.getFiveForecasts(id);
  dispatch({ type: ADD_FIVE_FORECASTS, payload: response });
};

export const deleteCurrentMainForecast = () => ({
  type: DELETE_CURRENT_MAIN_FORECAST,
});

export const deleteForecasts = () => ({
  type: DELETE_FIVE_FORECASTS,
});
