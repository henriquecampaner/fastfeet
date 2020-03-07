import React, { useEffect, useRef } from 'react';

import { useField } from '@unform/core';
import PropTypes from 'prop-types';

export default function Input({ name, ...rest }) {
  const inputRef = useRef(null);

  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <input ref={inputRef} defaultValue={defaultValue} {...rest} />

      {error && <span style={{ color: '#f00' }}>{error}</span>}
    </>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
};
