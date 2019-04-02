import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Search from './Search';
import Card from './MainCard';
import List from './List';
import { MainWrapper } from './style';

function mapStateToProps(state) {
  return {
    forecasts: state.forecasts,
    city: state.city,
  };
}

class App extends Component {
  state = {
    isLoadingList: false,
    isLoadingMainCard: false,
  };

  loading = typeContent => {
    this.setState(prevState => ({
      [typeContent]: !prevState[typeContent],
    }));
  };

  render() {
    const { isLoadingList, isLoadingMainCard } = this.state;
    const { loading } = this;
    const { forecasts, city } = this.props;

    if (!_.isEmpty(forecasts) && isLoadingList) {
      loading('isLoadingList');
    }

    if (!_.isEmpty(city) && isLoadingMainCard) {
      loading('isLoadingMainCard');
    }
    return (
      <MainWrapper>
        <Search loading={loading} />
        <Card loading={loading} isLoadingMainCard={isLoadingMainCard} />
        <List isLoading={isLoadingList} />
      </MainWrapper>
    );
  }
}

export default connect(mapStateToProps)(App);
