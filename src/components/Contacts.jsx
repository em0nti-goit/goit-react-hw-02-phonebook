import React from 'react'
import PropTypes from 'prop-types';
import { Alert, ListGroup } from 'react-bootstrap';

const Contacts = ({ contacts }) => {
  return (
    <>
      {contacts.length !== 0 ? (
        <ListGroup variant="flush">
          {contacts.map(({ name, number, id }) => {
            return (
              <ListGroup.Item key={id}>
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{name}</div>
                  {number}
                </div>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      ) : (
        <Alert variant="info">Contact list is empty</Alert>
      )}
    </>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number:PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

export default Contacts