/* eslint-disable no-shadow */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import { FaEllipsisH, FaEye, FaPen } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';

import PropTypes from 'prop-types';

import Moldal from '~/components/Moldal';
import api from '~/services/api';

import {
  Container,
  NotificationList,
  Notification,
  EditButton,
} from './styles';

export default function ActionsMenu({
  id,
  canceled,
  reload,
  page,
  content,
  moldal,
  moldalType,
}) {
  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  async function handleDeleteOrder(id) {
    if (window.confirm('Do you want to Cancel this Order?') === true) {
      await api.delete(`/problem/${id}/cancel-delivery`);
      reload();
      handleToggleVisible();
    }
  }

  async function handleDeleteCouries(id) {
    if (window.confirm('Do you want to delete this Plan?') === true) {
      await api.delete(`/deliveryman/${id}`);
      reload();
      handleToggleVisible();
    }
  }

  async function handleDeleteRecipient(id) {
    if (window.confirm('Do you want to delete this Plan?') === true) {
      await api.delete(`/recipients/${id}`);
      reload();
      handleToggleVisible();
    }
  }
  function handleOnClick() {
    setShowModal(true);
  }
  return (
    <Container>
      <FaEllipsisH color="#999" onClick={handleToggleVisible} />

      {/* Action Menu for Orders */}
      {page === 'orders' && (
        <NotificationList visible={visible}>
          <Notification>
            <button type="button" onClick={() => handleOnClick()}>
              <FaEye color="#8E5BE8" />
              <span>View Order</span>
            </button>
            <EditButton to={`/orders/edit/${id}`}>
              <FaPen color="#4D85EE" />
              <span>Edit</span>
            </EditButton>
            {canceled ? null : (
              <button type="button" onClick={() => handleDeleteOrder(id)}>
                <MdDeleteForever color="#DE3B3B" />
                <span>Delete</span>
              </button>
            )}
          </Notification>
        </NotificationList>
      )}

      {/* Action Menu for couries */}
      {page === 'couries' && (
        <NotificationList visible={visible}>
          <Notification>
            <EditButton to={`/couriers/edit/${id}`}>
              <FaPen color="#4D85EE" />
              <span>Edit</span>
            </EditButton>
            {canceled ? null : (
              <button type="button" onClick={() => handleDeleteCouries(id)}>
                <MdDeleteForever color="#DE3B3B" />
                <span>Delete</span>
              </button>
            )}
          </Notification>
        </NotificationList>
      )}

      {/* Action Menu for Recipients */}
      {page === 'recipients' && (
        <NotificationList visible={visible}>
          <Notification>
            <EditButton to={`/recipients/edit/${id}`}>
              <FaPen color="#4D85EE" />
              <span>Edit</span>
            </EditButton>
            {canceled ? null : (
              <button type="button" onClick={() => handleDeleteRecipient(id)}>
                <MdDeleteForever color="#DE3B3B" />
                <span>Delete</span>
              </button>
            )}
          </Notification>
        </NotificationList>
      )}

      {/* Action Menu for Problems */}
      {page === 'problems' && (
        <NotificationList visible={visible}>
          <Notification>
            <button type="button" onClick={() => handleOnClick()}>
              <FaEye color="#8E5BE8" />
              <span>View Problem</span>
            </button>
            {canceled ? null : (
              <button type="button" onClick={() => handleDeleteOrder(id)}>
                <MdDeleteForever color="#DE3B3B" />
                <span>Cancel Order</span>
              </button>
            )}
          </Notification>
        </NotificationList>
      )}

      {moldal ? (
        <Moldal
          showModal={showModal}
          setShowModal={setShowModal}
          content={content}
          moldalType={moldalType}
        />
      ) : (
        undefined
      )}
    </Container>
  );
}

ActionsMenu.propTypes = {
  moldal: PropTypes.bool.isRequired,
  moldalType: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  page: PropTypes.string.isRequired,
  canceled: PropTypes.string,
  reload: PropTypes.func.isRequired,
  content: PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.number,
    start_date: PropTypes.string,
    end_date: PropTypes.string,
    recipient: PropTypes.shape({
      name: PropTypes.string,
      street: PropTypes.string,
      number: PropTypes.string,
      city: PropTypes.string,
      postcode: PropTypes.string,
      country: PropTypes.string,
    }),
    signature: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
};

ActionsMenu.defaultProps = {
  canceled: '',
};
