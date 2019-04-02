import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Card from '../MainCard/Card';
import Loader from '../Loader';
import { Title, WrapperList } from '../style';

function mapStateToProps(state) {
  return {
    forecasts: state.forecasts,
  };
}

function List(props) {
  const { forecasts, isLoading } = props;
  if (_.isEmpty(forecasts) && !isLoading) {
    return null;
  }
  if (isLoading) {
    return <Loader message="Loading" />;
  }
  return (
    <WrapperList>
      <Title list>Forecast for the next 5 days</Title>
      {forecasts.list.map(function(id) {
        const data = forecasts[id];
        return <Card data={data} extraInfo />;
      })}
    </WrapperList>
  );
}

export default connect(mapStateToProps)(List);
