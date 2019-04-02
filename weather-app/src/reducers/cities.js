import {
  ADD_CITY,
  CURRENT_CITY,
  ADD_FIVE_FORECASTS,
  DELETE_CURRENT_MAIN_FORECAST,
  DELETE_FIVE_FORECASTS,
} from '../type';

export const currentCity = (state = [], action) => {
  switch (action.type) {
    case ADD_CITY:
      return action.payload;
    case CURRENT_CITY:
      return action.payload;
    case DELETE_CURRENT_MAIN_FORECAST:
      return [];
    default:
      return state;
  }
};

export const currentForecasts = (state = [], action) => {
  switch (action.type) {
    case ADD_FIVE_FORECASTS:
      return action.payload;
    case DELETE_FIVE_FORECASTS:
      return [];
    default:
      return state;
  }
};
