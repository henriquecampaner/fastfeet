import React from 'react';
import ReactModal from 'react-modal';

import { format, parseISO } from 'date-fns';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Moldal({
  showModal,
  setShowModal,
  content,
  moldalType,
}) {
  return (
    <ReactModal
      isOpen={showModal}
      shouldCloseOnEsc
      onRequestClose={() => setShowModal(false)}
      ariaHideApp={false}
      style={{
        content: {
          top: '25%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          width: '450px',
          transform: 'translate(-50%, -10%)',
        },
      }}
    >
      <Container>
        {moldalType === 'problem' ? (
          <>
            <h2>View Issue</h2>
            <p>{content.description}</p>
          </>
        ) : (
          <>
            <h3>Delivery information</h3>
            <p>{`${content.recipient.number}, ${content.recipient.street}`}</p>
            <p>{content.recipient.postcode}</p>
            <p>{`${content.recipient.city}, ${content.recipient.country}`}</p>

            <h3>Dates</h3>
            <p>
              Withdraw:
              <span>
                {content.start_date
                  ? format(parseISO(content.start_date), 'dd/MM/yyyy')
                  : ' Ready for collect'}
              </span>
            </p>
            <p>
              {' '}
              Delivered:
              <span>
                {content.end_date
                  ? format(parseISO(content.end_date), 'dd/MM/yyyy')
                  : ' Order not delivered'}
              </span>
            </p>

            {content.signature ? (
              <>
                <h3>Signature of recipient</h3>
                <img src={content.signature.url} alt={content.id} />
              </>
            ) : (
              undefined
            )}
          </>
        )}
      </Container>
    </ReactModal>
  );
}

Moldal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  moldalType: PropTypes.string.isRequired,
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
