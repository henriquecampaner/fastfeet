import React from 'react';

import { Container, ViewColor1, ViewColor2 } from './styles';

export default function Test({ children }) {
  return (
    <Container>
      <ViewColor1 />
      {children}
      <ViewColor2 />
    </Container>
  );
}
