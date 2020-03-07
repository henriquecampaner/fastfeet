import React from 'react';

import PropTypes from 'prop-types';

import { Button } from './styles';

export default function PageButton({ setPage, page, length }) {
  return (
    <section>
      <Button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        type="button"
      >
        Back
      </Button>
      <Button
        disabled={length.length < 5}
        type="button"
        onClick={() => setPage(page + 1)}
      >
        Next
      </Button>
    </section>
  );
}

PageButton.propTypes = {
  setPage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  length: PropTypes.arrayOf(PropTypes.object).isRequired,
};
