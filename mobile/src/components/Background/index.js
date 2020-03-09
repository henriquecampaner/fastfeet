import React from 'react';

import PropTypes from 'prop-types';

import { Container, ViewColor1, ViewColor2 } from './styles';

export default function Background({ children }) {
  return (
    <Container>
      <ViewColor1 />
      {children}
      <ViewColor2 />
    </Container>
  );
}

Background.propTypes = {
  children: PropTypes.element.isRequired,
};
