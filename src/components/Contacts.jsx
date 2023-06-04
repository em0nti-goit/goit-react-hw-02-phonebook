import React from 'react'
import PropTypes from 'prop-types';
import { Alert, ListGroup } from 'react-bootstrap';
import Contact from './Contact';

const Contacts = ({ contacts }) => {
  return (
    <>
      {contacts.length !== 0 ? (
        <ListGroup variant="flush">
          {contacts.map(({id, ...info}) => (
            <Contact key={id} contact={info} />
          ))}
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
      id: PropTypes.string.isRequired,
    })
  ),
};

export default Contacts