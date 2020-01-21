import React from 'react';

import PropTypes from 'prop-types';
import {Container, TInput} from './styles';

export default function Input({style, ...rest}) {
  return (
    <Container style={style}>
      <TInput {...rest} />
    </Container>
  );
}
