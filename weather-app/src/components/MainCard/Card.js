import React from 'react';
import Celsius from '../img/Celsius.svg';
import {
  Img,
  Wrapper,
  Temp,
  Info,
  CelsiusIcon,
  MoreTemp,
  Title,
  High,
  Low,
} from '../style';

const celsius = temp => Math.ceil(temp - 273);

const localDate = time => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  return new Date(time).toLocaleDateString('en-US', options);
};

const loadMoreForecasts = (getMore, id) => {
  if (getMore) {
    getMore(id);
  } else {
    return null;
  }
};

const Card = ({
  data,
  data: {
    dt_txt: dt = null,
    name = null,
    id,
    main: { temp, temp_max: tempMax, temp_min: tempMin },
  },
  getMore = null,
  extraInfo = false,
  hover = false,
}) => {
  const { icon, main, description } = data.weather[0];
  return (
    <Wrapper
      hover={hover}
      extraInfo={extraInfo}
      onClick={() => loadMoreForecasts(getMore, id)}
    >
      <Title extraInfo={extraInfo}>{name || localDate(dt)}</Title>
      <Info>
        <Img
          extraInfo={extraInfo}
          src={`http://openweathermap.org/img/w/${icon}.png`}
          alt={`${description}`}
        />
        <Temp extraInfo={extraInfo}>{celsius(temp)}</Temp>
        <CelsiusIcon extraInfo={extraInfo} src={Celsius} alt="Celsius" />
      </Info>
      <Info extraInfo={extraInfo} column>
        <p>{main}</p>
        <MoreTemp>
          <Low>
            {celsius(tempMin)}
            <CelsiusIcon tiny src={Celsius} alt="Celsius" />
          </Low>
          /
          <High>
            {celsius(tempMax)}
            <CelsiusIcon tiny src={Celsius} alt="Celsius" />
          </High>
        </MoreTemp>
      </Info>
    </Wrapper>
  );
};

export default Card;
