import React from 'react';

import { Button, TextButton } from './styles';

export default function ButtonComponent({ text }) {
  return (
    <Button>
      <TextButton>{text}</TextButton>
    </Button>
  );
}
