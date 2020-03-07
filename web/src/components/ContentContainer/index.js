import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function ContentContainer({ children }) {
  return <Container>{children}</Container>;
}

ContentContainer.propTypes = {
  children: PropTypes.element.isRequired,
};
