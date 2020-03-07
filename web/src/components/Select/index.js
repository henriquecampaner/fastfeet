import React, { useRef, useEffect, useState } from 'react';
import ReactSelect from 'react-select';

import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import api from '~/services/api';

import { Container } from './styles';

const Select = ({ name, optionType, ...rest }) => {
  const selectRef = useRef(null);
  const [couriers, setCouriers] = useState([]);
  const [recipients, setRecipients] = useState([]);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    async function getData() {
      const { data } = await api.get('deliveryman');
      const values = [];
      data.forEach(e => values.push({ value: e.id, label: e.name }));
      setCouriers(values);
    }
    getData();
  }, []);

  useEffect(() => {
    async function getData() {
      const { data } = await api.get('recipients');
      const values = [];
      data.forEach(e => values.push({ value: e.id, label: e.name }));
      setRecipients(values);
    }
    getData();
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'state.value',
      getValue: ref => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map(option => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <Container>
      <ReactSelect
        defaultValue={defaultValue}
        options={optionType === 'recipients' ? recipients : couriers}
        ref={selectRef}
        classNamePrefix="react-select"
        {...rest}
      />
      {error && <div>{error}</div>}
    </Container>
  );
};
export default Select;

Select.propTypes = {
  name: PropTypes.string.isRequired,
  optionType: PropTypes.string.isRequired,
};
