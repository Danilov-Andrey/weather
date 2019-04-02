class ForecastData {
  API = '597979cc37960a1798c02999147019f3';

  BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

  BASE_URL_FIVE_FORECASTS = 'https://api.openweathermap.org/data/2.5/forecast';

  fetchReq = async url => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };

  getData = async term => {
    try {
      const arrayData = [];
      const url = `${this.BASE_URL}?q=${term}&appid=${this.API}`;
      const data = await this.fetchReq(url);
      arrayData.push(data);
      return this.mapItemsToObjects(arrayData);
    } catch (err) {
      return err;
    }
  };

  getCurrentWeather = async (lat, lon) => {
    try {
      const arrayData = [];
      const url = `${this.BASE_URL}?lat=${lat}&lon=${lon}&appid=${this.API}`;
      const data = await this.fetchReq(url);
      arrayData.push(data);
      return this.mapItemsToObjects(arrayData);
    } catch (err) {
      return err;
    }
  };

  mapItemsToObjects = list => {
    const reducedItems = list.reduce(function(prevValue, currentValue) {
      return {
        ...prevValue,
        [currentValue.dt]: currentValue,
      };
    }, {});
    return {
      ...reducedItems,
      list: list.map(function(item) {
        return item.dt;
      }),
    };
  };

  getFiveForecasts = async id => {
    try {
      const url = `${this.BASE_URL_FIVE_FORECASTS}?id=${id}&appid=${this.API}`;
      const data = await this.fetchReq(url);
      const formattedProperties = await this.mapItemsToObjects(data.list);
      return formattedProperties;
    } catch (err) {
      return err;
    }
  };
}

const request = new ForecastData();

export default request;
