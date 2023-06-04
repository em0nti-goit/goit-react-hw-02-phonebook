import React from 'react'
import PropTypes from 'prop-types';
import { Alert, ListGroup } from 'react-bootstrap';

const Contacts = ({ contacts }) => {
  return (
    <>
      {contacts.length !== 0 ? (
        <ListGroup>
          {contacts.map(({ name, id }) => {
            return <ListGroup.Item key={id}>{name}</ListGroup.Item>;
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
      id: PropTypes.string.isRequired,
    })
  ),
};

export default Contacts