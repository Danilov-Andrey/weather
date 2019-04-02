import React from 'react';
import { ErrorMessage, Message } from '../style';

const Failing = ({ message, cod = null }) => (
  <ErrorMessage>
    <Message>{cod}</Message>
    <Message>{message}</Message>
  </ErrorMessage>
);

export default Failing;
