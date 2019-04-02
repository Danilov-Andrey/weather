import React from 'react';
import { Icon } from 'antd';
import 'antd/dist/antd.css';
import { Indicator, Message } from '../style';

const Loader = ({ message }) => (
  <Indicator>
    <Message>{message}</Message>
    <Icon type="loading" />
  </Indicator>
);

export default Loader;
