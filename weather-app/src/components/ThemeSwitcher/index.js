import React, { Component } from 'react';
import { Switch } from 'antd';
import { Switcher } from '../style';
import './style.css';

class ThemeSwitcher extends Component {
  onChange = checked => {
    this.props.handleThemeChange(checked);
  };

  render() {
    return (
      <Switcher>
        <Switch defaultChecked onChange={this.onChange} />
      </Switcher>
    );
  }
}
export default ThemeSwitcher;
