import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { ThemeProvider } from 'styled-components';
import Search from './Search';
import Card from './MainCard';
import List from './List';
import { MainWrapper, Weather } from './style';
import { theme1, theme2 } from './theme/globalStyle';
import ThemeSwitcher from './ThemeSwitcher';

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
    theme: theme1,
  };

  loading = typeContent => {
    this.setState(prevState => ({
      [typeContent]: !prevState[typeContent],
    }));
  };

  handleThemeChange = value => {
    const theme = value ? theme1 : theme2;
    this.setState({ theme });
  };

  render() {
    const { isLoadingList, isLoadingMainCard, theme } = this.state;
    const { loading } = this;
    const { forecasts, city } = this.props;

    if (!_.isEmpty(forecasts) && isLoadingList) {
      loading('isLoadingList');
    }

    if (!_.isEmpty(city) && isLoadingMainCard) {
      loading('isLoadingMainCard');
    }
    return (
      <ThemeProvider theme={theme}>
        <MainWrapper>
          <Weather>
            <ThemeSwitcher handleThemeChange={this.handleThemeChange} />
            <Search loading={loading} />
            <Card loading={loading} isLoadingMainCard={isLoadingMainCard} />
            <List isLoading={isLoadingList} />
          </Weather>
        </MainWrapper>
      </ThemeProvider>
    );
  }
}

export default connect(mapStateToProps)(App);
