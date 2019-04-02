import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getCurrentCity, fiveForecasts } from '../../actions';
import Card from './Card';
import Loader from '../Loader';
import ErrorMessage from '../ErrorMessage';

function mapStateToProps(state) {
  return {
    city: state.city,
  };
}

class ViewWeather extends Component {
  state = { err: false, allow: true };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ allow: false }, () => {
          const { loading, getCurrentCity } = this.props;
          loading('isLoadingMainCard');
          getCurrentCity(position.coords.latitude, position.coords.longitude);
        });
      },
      err => this.setState({ err: true, allow: false })
    );
  }

  getMore = id => {
    const { fiveForecasts, loading } = this.props;
    loading('isLoadingList');
    fiveForecasts(id);
  };

  render() {
    const { city, isLoadingMainCard } = this.props;
    const { err, allow } = this.state;
    const message = 'allow access to the location or use the search';
    const errorMessage = 'use the search';
    const wait = 'Loading';

    if (allow) {
      return <Loader message={message} />;
    }

    if (isLoadingMainCard) {
      return <Loader message={wait} />;
    }

    if (_.isEmpty(city) && err) {
      return <ErrorMessage message={errorMessage} />;
    }

    if (_.isEmpty(city)) {
      return null;
    }

    if ('undefined' in city) {
      const {
        undefined: { message, cod },
      } = city;
      return <ErrorMessage message={message} cod={cod} />;
    }

    return city.list.map(id => {
      const data = city[id];
      return <Card data={data} getMore={this.getMore} hover />;
    });
  }
}

export default connect(
  mapStateToProps,
  { getCurrentCity, fiveForecasts }
)(ViewWeather);
