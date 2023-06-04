import React from 'react'
import PropTypes from 'prop-types';
import { Alert, ListGroup } from 'react-bootstrap';
import Contact from './Contact';

const Contacts = ({ contacts, onDelete }) => {
  return (
    <>
      {contacts.length !== 0 ? (
        <ListGroup variant="flush">
          {contacts.map(contact => (
            <Contact key={contact.id} contact={contact} onDelete={onDelete} />
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