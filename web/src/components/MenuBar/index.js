/* eslint-disable react/require-default-props */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { MdAdd, MdSearch } from 'react-icons/md';

import PropTypes from 'prop-types';

import api from '~/services/api';

import { InputContainer, ButtonContainer, ContentHeader } from './styles';

export default function MenuBar({
  setLoad,
  status,
  Title,
  searchItem,
  to,
  noAdd,
}) {
  const [search, setSearch] = useState('');

  async function handleSearchOrders(key) {
    if (key === 'Enter') {
      const { data } = await api.get('orders', {
        params: {
          productName: search,
        },
      });
      const addStatus = data.map(response => ({
        ...response,
        status: response.canceled_at
          ? status.canceled
          : response.end_date
          ? status.delivered
          : response.start_date
          ? status.withdrawn
          : status.pending,
      }));
      setLoad(addStatus);
    }
  }

  async function handleSearchCouries(key) {
    if (key === 'Enter') {
      const { data } = await api.get('deliveryman', {
        params: {
          deliverymanName: search,
        },
      });
      setLoad(data);
    }
  }

  async function handleSearchProblems(key) {
    if (key === 'Enter') {
      const { data } = await api.get('/orders/problems/list', {
        params: {
          q: search,
        },
      });
      setLoad(data);
    }
  }

  function handleSearch(input) {
    setSearch(input);
  }
  return (
    <>
      <ContentHeader>
        <h2>{Title}</h2>

        <div>
          <InputContainer>
            <div>
              <MdSearch size={20} color="#666" />
              {/* Search Orders */}
              {searchItem === 'orders' && (
                <input
                  placeholder="Search Order"
                  onChange={e => handleSearch(e.target.value)}
                  onKeyPress={e => handleSearchOrders(e.key)}
                />
              )}

              {/* Search Couries */}
              {searchItem === 'couries' && (
                <input
                  placeholder="Search Order"
                  onChange={e => handleSearch(e.target.value)}
                  onKeyPress={e => handleSearchCouries(e.key)}
                />
              )}

              {/* Search recipients */}
              {searchItem === 'recipients' && (
                <input
                  placeholder="Search Order"
                  onChange={e => handleSearch(e.target.value)}
                  onKeyPress={e => handleSearchProblems(e.key)}
                />
              )}

              {/* Search problems */}
              {searchItem === 'problems' && (
                <input
                  placeholder="Search Order"
                  onChange={e => handleSearch(e.target.value)}
                  onKeyPress={e => handleSearchProblems(e.key)}
                />
              )}
            </div>
          </InputContainer>

          {noAdd ? (
            undefined
          ) : (
            <ButtonContainer to={to}>
              <MdAdd size={25} color="#fff" />
              <span>Add new order</span>
            </ButtonContainer>
          )}
        </div>
      </ContentHeader>
    </>
  );
}

MenuBar.propTypes = {
  searchItem: PropTypes.string.isRequired,
  noAdd: PropTypes.bool,
  Title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  setLoad: PropTypes.func.isRequired,
  status: PropTypes.objectOf(
    PropTypes.shape({
      title: PropTypes.string,
      background: PropTypes.string,
      textColor: PropTypes.string,
    })
  ),
};

MenuBar.defaultProps = {
  noAdd: false,
};

// MenuBar.defaultProps = {
//   status: PropTypes.objectOf(
//     PropTypes.shape({
//       title: '',
//       background: '',
//       textColor: '',
//     })
//   ),
// };

// MenuBar.defaultProps = {
//   status: PropTypes.shape({
//     delivered: PropTypes.shape({
//       title: '',
//       background: '',
//       textColor: '',
//     }),
//     pending: PropTypes.shape({
//       title: '',
//       background: '',
//       textColor: '',
//     }),
//     withdrawn: PropTypes.shape({
//       title: '',
//       background: '',
//       textColor: '',
//     }),
//     canceled: PropTypes.shape({
//       title: '',
//       background: '',
//       textColor: '',
//     }),
//   }),
// };
