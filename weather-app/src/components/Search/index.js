import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'antd';
import {
  getForecast,
  deleteForecasts,
  deleteCurrentMainForecast,
} from '../../actions';
import { Form, Input, Button } from '../style';

class SearchBar extends Component {
  state = {
    term: '',
  };

  onChange = e => {
    this.setState({ term: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const {
      getForecast,
      deleteForecasts,
      loading,
      deleteCurrentMainForecast,
    } = this.props;
    const { term } = this.state;
    if (term.length <= 3) {
      return null;
    }
    deleteCurrentMainForecast();
    deleteForecasts();
    loading('isLoadingMainCard');
    getForecast(term);
    this.setState({ term: '' });
  };

  render() {
    const { term } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <Input
          type="text"
          value={term}
          onChange={this.onChange}
          placeholder="Enter your favourite city"
        />
        <Button type="submit">
          <Icon type="search" />
        </Button>
      </Form>
    );
  }
}

export default connect(
  null,
  {
    getForecast,
    deleteForecasts,
    deleteCurrentMainForecast,
  }
)(SearchBar);
